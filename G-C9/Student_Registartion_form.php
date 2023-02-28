<?php 

include "Registration.php";

  if (isset($_POST['submit'])) {

    $FirstName = $_POST['FirstName'];

    $LastName = $_POST['LastName'];

    $EmailId = $_POST['EmailId'];

    $MoblieNo = $_POST['MobileNo'];

    $Gender = $_POST['Gender'];
    $DOB = $_POST['DOB'];
    $Address = $_POST['Address'];
    $City = $_POST['City'];
    $Pincode = $_POST['Pincode'];
    $State = $_POST['State'];

    $Country = $_POST['Country'];

    
   

    $sql = "INSERT INTO `studentregistrationform` (FirstName, LastName, EmailId, MobileNo, Gender,DOB,Address,City,Pincode,State,Country)
     VALUES ('$FirstName','$LastName','$EmailId','$MobileNo','$Gender','$DOB','$Address','$City','$Pincode','$State','$Country')";

    $result = $conn->query($sql);

    if ($result == TRUE) {

      echo '<script>alert("Record Successfully Entered")</script>';

    }else{

      echo "not inserted";

    } 

    $conn->close(); 

  }

?>