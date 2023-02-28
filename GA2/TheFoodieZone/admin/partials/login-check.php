<?php

// Authrization -- Access control 
if(!isset($_SESSION['user'])){
// user not login
$_SESSION['no-login-message'] = "<div class='error text-center'Please login to access admin panel";
header('location:'.SITEURL.'/admin/login.php');
}


?>