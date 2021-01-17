<?php
if ($_POST) {
     $mysqli = new mysqli("sql12.freesqldatabase.com", "sql12387048", "K6rSsxq3sA", "sql12387048");
   // $mysqli = new mysqli("localhost", "root", "", "test");

    if ($mysqli->connect_errno) {
        echo "Failed to connect to MySQL: " . $mysqli->connect_error;
        exit();
    } else {
        if (!(isset($_POST['dummy']))) {
            $inputVal = $_POST['inputVal'];
            $inputId = $_POST['inputId'];
            $inputType = $_POST['inputType'];

            $values = $mysqli->query("SELECT * FROM test WHERE inputId = '$inputId'");

            if ($values->num_rows) {
                $sql = "UPDATE test SET inputVal = '$inputVal' ,  inputType = '$inputType' WHERE inputId = '$inputId' ";
            } else {
                $sql = "INSERT INTO test (inputId, inputVal, inputType) VALUES ('$inputId','$inputVal', '$inputType')";
            }
            $values->free();

            $mysqli->query($sql);
        }

        $all = $mysqli->query("SELECT * FROM test");
        $result = [];
        if ($all->num_rows) {
            while ($row = $all->fetch_assoc()) {
                array_push($result, $row);
            }
        }
        $all->free();
        $mysqli->close();
        echo (json_encode($result));
    }
}
