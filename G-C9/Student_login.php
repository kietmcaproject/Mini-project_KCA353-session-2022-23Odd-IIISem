<?php 

@include "Registration.php";

if (isset($_POST['done'])){
    $Email=$_POST['Email'];
    $Password=$_POST['Password'];
    $sql="select * from student where Email='".$Email."'AND Password='".$Password."'
    limit 1";
    $query=mysqli_query($conn,$sql);
    if(mysqli_num_rows($query)>0){
        $error="user already exist";
        echo "login sucessfully";
        header("location: ./ShowDetails.php");
    }else{
        $sql="select * from  student where Email='".$Email."'limit 1";
        $query=mysqli_query($conn,$sql);
        if(mysqli_num_rows($query)>0){
            echo '<script>alert("Enter correct password")</script>';
        }
        else{
            echo '<script>alert("Enter correct username")</script>';
            
        }
    }
}
