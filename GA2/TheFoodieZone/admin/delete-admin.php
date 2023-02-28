<?php
// include constant.php file 
 include('../config/constants.php');
// get the id of admin to be deleted 
$id = $_GET['id'];
// create sql query to delete admin 
$sql = "DELETE FROM tbl_admin WHERE id = $id";
// execute the query 
$res = mysqli_query($conn, $sql);
// check the query executed or not 
    if($res == true){
    // create session variablr to delete message 
        $_SESSION['delete'] = "<div class = 'success'>Deleted Successfully.</div>";
    // redirect manage admin page 
        header('location:'.SITEURL.'/admin/manage-admin.php');
    }
    else{
        $_SESSION['delete'] = "<div class = 'error'>Failed to delete admin</div>";
        header('location:'.SITEURL.'/admin/manage-admin.php');
    }

?>