<?php
include "Registration.php";
if (isset($_POST['submit'])) {

    $Details = $_POST['Details'];

    $Eligibilty = $_POST['Eligibilty'];

    $Form = $_POST['Form'];

    $Date = $_POST['Date'];

   

    $sql = "INSERT INTO `detailsofcompany`(`Details`, `Eligibilty`, `Form`, `Date`) VALUES ('$Details','$Eligibilty','$Form','$Date')";

    $result = $conn->query($sql);

    if ($result == TRUE) {

        echo '<script>alert("Record Successfully Entered")</script>';
        header("location: ./ShowDetails.php");

    }else{

      echo "Error:". $sql . "<br>". $conn->error;

    } 

    $conn->close(); 

  }

?>
