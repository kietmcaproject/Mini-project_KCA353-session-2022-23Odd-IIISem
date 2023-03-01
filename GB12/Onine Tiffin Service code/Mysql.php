<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

//$con = mysqli_connect('localhost', 'root', '','db_connect');
$con = mysqli_connect($host, $username, $password, $dbname);

    // to ensure that the connection is made
    if (!$con)
    {
        die("Connection failed!" . mysqli_connect_error());
    }

// get the post records
$txtid = $_POST['id'];
$txtname = $_POST['txtName'];
$txtnumber = $_POST['txtEmail'];
$txtorder = $_POST['txtPhone'];
$txtquantity = $_POST['txtMessage'];
$txtaddress = $_POST['address'];

// database insert SQL code
$sql = "INSERT INTO `tbl_order_table1` (`Id`, `name`, `number`, `order`, `quantity`,'address') VALUES ('0', '$txtname', '$txtnumber', '$txtorder', '$txtquantity' , 'ddress')";

// insert in database 
$rs = mysqli_query($con, $sql);

if($rs)
{
	echo "Contact Records Inserted";
}

?>