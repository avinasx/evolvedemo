
 let phoneRegEx = /^\d{10}$/;
 let emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

$('.dum').change(function () {
   
    let inputVal = this.value;
    let inputId = this.id;
    let inputType = null;

    if (inputVal.match(phoneRegEx)) {
        alert("PHONE NUMBER DETECTED\n" + this.value + " will be saved to the database");
        inputType = 'phone';
        saveDataSql();
    } else if (inputVal.match(emailRegEx)) {
        alert("EMAIL DETECTED\n" + this.value + " will be saved to the database");
        inputType = 'email';
        saveDataSql();
    } else if(inputVal){
        alert("!INVALID INPUT! \n NO phone number or email Id Detected, NOTHING is going to saved in database!");
    }

    function saveDataSql() {
        request = $.ajax({
            url: "index.php",
            type: "post",
            data: {
                inputVal: inputVal,
                inputId :inputId,
                inputType: inputType
            },
            success: function(response){
                insertTD(response);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });
    }

});
$('.dum').trigger('change');


$('.nodum').change(function () {

    let inputVal = this.value;
    let inputId = this.id;
    let inputType = null;


    if (inputVal.match(phoneRegEx)) {
        alert("PHONE NUMBER DETECTED\n" + this.value + " will be saved to the database");
        inputType = 'phone';
        saveDataNoSql();
    } else if (inputVal.match(emailRegEx)) {
        alert("EMAIL DETECTED\n" + this.value + " will be saved to the database");
        inputType = 'email';
        saveDataNoSql();
    } else if(inputVal){
        alert("!INVALID INPUT! \n NO phone number or email Id Detected, NOTHING is going to saved in database!");
    }

    function saveDataNoSql() {
        $.ajax({
            url: "http://localhost:3000/",
            type: "post",
            data: {
                inputVal: inputVal,
                inputId :inputId,
                inputType: inputType
            },
            success: function(response){
                insertTDno(response);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });
    }

});
$('.nodum').trigger('change');



$(document).ready(function(){
    let dummy = 'xyz';
    $.ajax({
        url: "index.php",
        type: "post",
        data: {
            dummy: dummy,
        },
        success: function(response){
            insertTD(response);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });

    $.ajax({
        url: "http://localhost:3000/",
        type: "post",
        data: {
            dummy: dummy,
        },
        success: function(response){
            console.dir(response);
            insertTDno(response);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
})

function insertTD(response){
    response = JSON.parse(response);
    response.forEach(function(item){
        if(item.inputId == 'dummy1' ){
            document.getElementById('dummy1val').innerHTML = item.inputVal;
            document.getElementById('dummy1type').innerHTML = item.inputType;
        }else if(item.inputId == 'dummy2' ){
            document.getElementById('dummy2val').innerHTML = item.inputVal;
            document.getElementById('dummy2type').innerHTML = item.inputType;
        }else if(item.inputId == 'dummy3' ){
            document.getElementById('dummy3val').innerHTML = item.inputVal;
            document.getElementById('dummy3type').innerHTML = item.inputType;
        }
    });
}


function insertTDno(response){
  //  response = JSON.parse(response);
    response.forEach(function(item){
        if(item.inputId == 'nodummy1' ){
            document.getElementById('nodummy1val').innerHTML = item.inputVal;
            document.getElementById('nodummy1type').innerHTML = item.inputType;
        }else if(item.inputId == 'nodummy2' ){
            document.getElementById('nodummy2val').innerHTML = item.inputVal;
            document.getElementById('nodummy2type').innerHTML = item.inputType;
        }else if(item.inputId == 'nodummy3' ){
            document.getElementById('nodummy3val').innerHTML = item.inputVal;
            document.getElementById('nodummy3type').innerHTML = item.inputType;
        }
    });
}



