<?php include('partials/menu.php'); ?> 

<div class="main-content">
    <div class="Wrapper">
        <h1>Update Admin</h1>
<br><br>

<?php  
    // get the id of selected  admin
        $id = $_GET['id'];

    // create query 
        $sql = "SELECT * FROM tbl_admin WHERE id = $id";
    // execute query 
        $res = mysqli_query($conn, $sql);
    // check query is executeor not 
        if($res == TRUE){
    // chech data is avilable or not 
        $count = mysqli_num_rows($res);
            if($count == 1){
                $row = mysqli_fetch_assoc($res);
                $full_name = $row['full_name'];
                $username = $row['username'];
            }
            else{
                header('location:'.SITEURL.'/admin/manage-admin.php');
            }
    
        }
?>

        <form action="" method="POST">
            <table class="tbl-30">
                <tr>
                    <td>Full Name:</td>
                    <td>
                        <input type="text" name="full_name" value="<?php echo $full_name; ?>">
                    </td>            
            
            </tr>

            <tr>
                <td>
                    username:

                </td>
                <td>
                    <input type="text" name="username" value="<?php echo $username; ?>">
                </td>
            </tr>
            <tr>
                <td colspan= "2">
                    <input type="hidden" name="id" value="<?php echo $id; ?>">
                    <input type="submit" name="submit" value="Update Admin" class="btn-secondary   ">
                </td>
            </tr>
                
            </table>
        </form>
    </div>
</div>
<?php 
// button clicked or not 
        if(isset($_POST['submit'])){
            // get the value from form to update 
            $id = $_POST['id'];
            $full_name = $_POST['full_name'];
            $username = $_POST['username'];
        // create sql query to update admin 
            $sql = "UPDATE tbl_admin SET
            full_name = '$full_name', 
            username ='$username' 
            WHERE id = '$id';
            ";

     // execute the query 
            $res = mysqli_query($conn, $sql);
    // query is successfully execute or not 
            if($res == TRUE){
                $_SESSION['update']="<div class='success'>Admin Update Successfully</div>";
                header('location:'.SITEURL.'/admin/manage-admin.php');
            }
            else{
                $_SESSION['update']="<div class='error'>Failed to delete admin</div>";
                header('location:'.SITEURL.'/admin/manage-admin.php');
            }
        }
?>

<?php include('partials/footer.php'); ?> 