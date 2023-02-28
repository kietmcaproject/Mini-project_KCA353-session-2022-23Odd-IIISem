<?php 

include "Registration.php";

  if (isset($_POST['submit'])) {

    $UserName = $_POST['UserName'];

    $Email = $_POST['Email'];

    $Password = $_POST['Password'];

   

    $sql = "INSERT INTO `student`(`UserName`, `Email`, `Password`) VALUES ('$UserName','$Email','$Password')";

    $result = $conn->query($sql);

    if ($result == TRUE) {

      echo '<script>alert("Record Successfully Entered")</script>';
      header("location: ./Students_Registration_Form.html");

    }else{

      echo "Error:". $sql . "<br>". $conn->error;

    } 

    $conn->close(); 

  }

?>