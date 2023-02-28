<?php
    // include constants file 
    include('../config/constants.php');

// check wheather the id and image_name value is set or not 
if(isset($_GET['id']) AND isset($_GET['image_name']))
{
// get the value and delete 
    $id = $_GET['id'];
    $image_name = $_GET['image_name'];


// remove the physical image file is available
if($image_name!=""){    
// image is available so remove it 
    $path = "../images/category/".$image_name;
// remove the image 
    $remove = unlink($path);

    if($remove == false){
        $_SESSION['remove']="<div class='error'>Failed to remove category image.</div>";
        header("location:".SITEURL.'/admin/manage-category.php');
        die();

    }
}


// delete data from databse 

// sql query to delete data from database 
    $sql = "DELETE FROM tbl_category WHERE id = $id";
// execute query 
    $res = mysqli_query($conn,$sql);

// check data delete or not from database
    if($res==true){
        $_SESSION['delete']="<div class='success'>Category deleted successfully.</div>";
        header("location:".SITEURL.'/admin/manage-category.php');
    }
    else{
        $_SESSION['delete']="<div class='error'>Failed to delete category.</div>";
        header("location:".SITEURL.'/admin/manage-category.php');
    }

}
else{
    // redirect to manage category page 
    header('location:'.SITEURL.'/admin/manage-category.php');
}
?>