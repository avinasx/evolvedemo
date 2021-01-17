# Demo App

Copy of the problem statement:
  - "Create a small demo program in PHP and Nodejs. The program needs to use JS to read all the entries done on the page and whenever a phone number or email is entered by the user it should pick it up and store it in the database.".
  

# What You need:
1. A machine capable of running Apcahe2/httpd, Php, NodeJs, and A latest web-browser.
2. fair internet connection as code uses CDNs and databases on clouds.

# How to Use:
1. Install NodeJs, PHP, and apache2/httpd, start apache2 server on port 80.
2. Clone the repo from https://github.com/CodeChari/evolvedemo.git to the document root of apache2
3. Run "npm install" in the repo's directory
4. run "npm start". it will run node server on port 3000.
5. now go to http://YourServerIP/evolvedemo/index.html and test.
6. Local SQL, MongoDB installation not required as code is using cloud databases.
7. Dump of demo databases i.e. test.sql and test.json are present in the repo.

# What?
1. There are three dummy fields.
2. There are two copies of three input fields in two different tabs.
3. Values corresponding to all three of them are stored in a SQL-DB as well as in NoSQL-Document(JSON/BSON).
4. PHP is used to store data in SQL and read data from SQL-DB (check the first tab).
5. NodeJs is used to Store data to NoSQL DB and read data from NoSQL DB
6. An HTML table below input fields shows data from both types of DB in corresponding tabs.

# When?
1. Whenever a phone number or email is entered, it is saved in the database along with a flag named "type" which tells if it is a phone number or email.
2. Anything other than phone and email is not saved in DB.




### Tech

* [node.js] - evented I/O for the backend written in JS
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [jQuery] - duh
* [Twitter Bootstrap] - meh
* [Php] - :)
* [MySQL] - A Relational Database
* [MongoDb] - A Non-Relational Database


### Installation

App requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd evolvedemo
$ npm install
$ npm start
```


### Plugins

None


### Development

Want to contribute? Great! contact me.



License
----

MIT




   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Php]: <https://www.php.net/>
   [MySQL]: <https://www.mysql.com/>
   [MongoDb]: <https://www.mongodb.com/>
 

  
