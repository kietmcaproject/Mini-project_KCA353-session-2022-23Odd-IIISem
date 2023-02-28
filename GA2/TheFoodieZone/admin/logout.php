<?php

 include('../config/constants.php');

// destroy session 
session_destroy();

// Redirect login page 
header('location:'.SITEURL.'/admin/login.php');


?>