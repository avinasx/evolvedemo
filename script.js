// document.querySelectorAll('.dum').onkeyup = function(){
// let val = this.value; 
// alert(val);
// }

$('.dum').change(function () {

    let phoneRegEx = /^\d{10}$/;
    let emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    let inputVal = this.value;
    let inputId = this.id;
    let inputType = null;


    if (inputVal.match(phoneRegEx)) {
        alert('Phone number detected:  ' + this.value + ' this will be saved to database');
        inputType = 'phone';
        saveDataSql();
    } else if (inputVal.match(emailRegEx)) {
        alert('Email detected:  ' + this.value + ' this will be saved to database');
        inputType = 'email';
        saveDataSql();
    } else if(inputVal){
        alert('No phone number or email Id Detected, Nothing is going to saved in database!');
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
            success: function (response) {
              //  response = JSON.parse(response);
                console.dir(response);
            //    let inputVal = response.response;
            //    let inputType = response.inputType;
            //    let inputId = response.inputId;

            //    document.getElementById(inputId+'val').innerHTML = inputVal;
            //    document.getElementById(inputId+'type').innerHTML = inputType;


            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus, errorThrown);
            }
        });
    }

});

$('.dum').trigger('change');



