<?php
if ($_POST) {
    $mysqli = new mysqli("sql12.freesqldatabase.com", "sql12387048", "K6rSsxq3sA", "sql12387048");

    $inputVal = $_POST['inputVal'];
    $inputId = $_POST['inputId'];
    $inputType = $_POST['inputType'];


    // Check connection
    if ($mysqli->connect_errno) {
        echo "Failed to connect to MySQL: " . $mysqli->connect_error;
        exit();
    } else {

        $values = $mysqli->query("SELECT * FROM test WHERE inputId = '$inputId'");



        if ($values->num_rows) {
            $sql = "UPDATE test SET inputVal = '$inputVal' ,  inputType = '$inputType' WHERE inputId = '$inputId' ";
        } else {
            $sql = "INSERT INTO test (inputId, inputVal, inputType) VALUES ('$inputId','$inputVal', '$inputType')";
        }

        $all = $mysqli->query("SELECT * FROM test");

        if ($values->num_rows) {
            
        }

        if ($mysqli->query($sql) === TRUE) {
         // var_dump(json_encode($values->fetch_assoc()));
           echo (json_encode($all->fetch_assoc()));
        } else {
            var_dump($mysqli->error);
        }
    }
}
