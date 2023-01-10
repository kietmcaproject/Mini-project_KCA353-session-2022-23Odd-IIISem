<?php


$connectQuery = mysqli_connect('localhost','root');
mysqli_select_db($connectQuery,'placement information system');

if(mysqli_connect_errno()){
    echo mysqli_connect_error();
    exit();
}
?>