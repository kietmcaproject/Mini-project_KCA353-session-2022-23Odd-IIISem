<?php


$conn = mysqli_connect("localhost", "root", "", "placement information system");
         
// Check connection
if($conn === false){
    die("ERROR: Could not connect. "
        . mysqli_connect_error());
}
else{
    echo "connected";
}
if(isset($_POST['submit']))
       {
$id=$_POST['id'];
$name=$_POST['fname'];
$course=$_POST['course'];
$dob=$_POST['dob'];
$email=$_POST['email'];
$ten=$_POST['10th'];
$twel=$_POST['12th'];
$gap=$_POST['gap'];
$pass=$_POST['pass'];
$backlog=$_POST['backlog'];
$roll=$_POST['roll'];
$croll=$_POST['classroll'];
$grad=$_POST['graduation'];
$pg=$_POST['pg'];
$cont=$_POST['contact'];
$status=$_POST['status1'];
$sec=$_POST['section'];

    $sqlc = "INSERT INTO `student_details`(user_id, password, name, course, roll_no, email_id, contact, dob, classroll_no, section, hsc_mark, ssc_mark, graduation_mark, postgraduation, backlog, gap, placement_status) 
     values ('$id',
     '$pass',
     '$name',
     '$course',
     '$roll',
     '$email',
     '$cont',
     '$dob',
     '$croll,
     '$sec',
     '$ten',
     '$twel',
     '$grad',
     '$pg',
     '$backlog',
     '$gap',
     '$status',
     )";
    $result = mysqli_query($connectQuery,$sqlc);
    if ($result) {
      echo "New student added successfully";
    } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($connectQuery);
    }
  }
  mysqli_close($connectQuery); 
   

?>