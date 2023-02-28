<?php
@include 'Registration.php';
if (isset($_POST['done'])) {

    $name = $_POST['name'];

    $EmailID = $_POST['EmailID'];
    

   

    $sql = "INSERT INTO `contactus`(`name`, `EmailID`) VALUES ('$name','$EmailID')";
    echo '<script>alert("successfully sent message")</script>';
    header("location: ./LandingPage.html");

$query=mysqli_query($conn,$sql);
}
?>