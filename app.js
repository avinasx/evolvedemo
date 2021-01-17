var express = require('express'), bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
var cors = require('cors')
var app = express();

app.use(cors())

//  app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const uri = "mongodb+srv://root:root@cluster0.jy3ar.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });


app.post('/', function (request, response) {
    requestData = request.body;
    if (requestData) {
        (async () => {
            if (!(requestData.dummy)) {
                await create(requestData);
            }
            result = await getDocs();
            console.dir(result);
            response.send(result); 
          })();
    }

});


app.listen(3000, function () {
    console.log('CORS-enabled web server listening on port 3000')
})


async function getDocs() {
    try {
        await client.connect()
        coll = await client.db('test').collection('test')
        cursor = await coll.find({})
        result = await cursor.toArray()
        if(result){
            return result;
        }
    } catch (e) {
        console.error('Error:', e)
    }
    finally {
        client.close();
    }
};



async function create(newData) {
    query = await client.db("test").collection("test").findOne({ inputId: newData.inputId });
    if (query) {
        await  client.db("test").collection("test").updateOne({ inputId: newData.inputId }, { $set: newData });
    } else {
        await  client.db("test").collection("test").insertOne(newData);
    }
}




