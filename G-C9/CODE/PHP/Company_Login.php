<?php 

@include "Registration.php";

if (isset($_POST['submit'])){
    $UserName=$_POST['UserName'];
    $Password=$_POST['Password'];
    $sql="select * from company_login where UserName='".$UserName."'AND Password='".$Password."'
    limit 1";
    $query=mysqli_query($conn,$sql);
    if(mysqli_num_rows($query)>0){
        $error="user already exist";
        echo "login sucessfully";
        header("location: ./companyDetail.html");
    }else{
        $sql="select * from company_login where UserName='".$UserName."'limit 1";
        $query=mysqli_query($conn,$sql);
        if(mysqli_num_rows($query)>0){
            echo '<script>alert("Enter correct password")</script>';
        }
        else{
            echo '<script>alert("Enter correct username")</script>';
            
        }
    }
}


?>