<?php

$server_name=”localhost”;

$username=”root”;

$password=””;

$database_name=”database123″;

$conn=mysqli_connect($server_name,$username,$password,$database_name);
//now check the connection
if(!$conn)
{die("Connection Failed:" . mysqli_connect_error());}
if(isset($_POST['save']))
{
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$gender = $_POST['gender'];
$email = $_POST['email'];
$phone = $_POST['phone'];
//For inserting the values to mysql database 
$sql_query = "INSERT INTO entry_details (first_name,last_name,gender,email,mobile)
VALUES ('$first_name','$last_name','$gender','$email','$phone')";
if (mysqli_query($conn, $sql_query))
{
echo "New Details Entry inserted successfully !";
}
//Full Code of php file for mySql database connection with html form
<?php
$server_name="localhost";
$username="root";
$password="";
$database_name="database123";

$conn=mysqli_connect($server_name,$username,$password,$database_name);
//now check the connection
if(!$conn)
{
	die("Connection Failed:" . mysqli_connect_error());

}

if(isset($_POST['save']))
{	
	 $first_name = $_POST['first_name'];
	 $last_name = $_POST['last_name'];
	 $gender = $_POST['gender'];
	 $email = $_POST['email'];
	 $phone = $_POST['phone'];

	 $sql_query = "INSERT INTO entry_details (first_name,last_name,gender,email,mobile)
	 VALUES ('$first_name','$last_name','$gender','$email','$phone')";

	 if (mysqli_query($conn, $sql_query)) 
	 {
		echo "New Details Entry inserted successfully !";
	 } 
	 else
     {
		echo "Error: " . $sql . "" . mysqli_error($conn);
	 }
	 mysqli_close($conn);
}

?>