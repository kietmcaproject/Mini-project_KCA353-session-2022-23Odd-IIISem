<?php


$connectQuery = mysqli_connect('localhost','root');
mysqli_select_db($connectQuery,'placement information system');


if($connectQuery){
    ?>
    <script>
       
    </script>
   <?php 
}else{
    ?>
    <script>
        alert ('not connected');
    </script>
    <?php
}
?>