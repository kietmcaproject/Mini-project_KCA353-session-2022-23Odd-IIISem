<?php include('partials/menu.php'); ?> 


<div class="main-content">
    <div class="Wrapper">
        <h1>Add Admin</h1>

        <br><br>


        <?php
            if(isset($_SESSION['add'])){  // checking wheather the session set of not
                echo $_SESSION['add']; // display the session message if set 
                unset($_SESSION['add']); // remove session message
            }
        ?>
        <form action="" method="POST">

            <table class="tbl-30">
                <tr>
                    <td>Full Name: </td>
                    <td><input type="text" name="full_name" placeholder="Enter Your Name"></td>
                </tr>

                <tr>
                    <td>Username: </td>
                    <td>
                    <input type="text" name="username" placeholder="Enter Your Username">
                    </td>
                </tr>

                <tr>
                    <td>Password: </td>
                    <td>
                    <input type="password" name="password" placeholder="Enter Your Password">
                    </td>
                </tr>

                <tr>
                    <td colspan="2">
                        <input type="submit" name="submit" value="Add Admin" class="btn-secondary">
                    </td>
                </tr>
            </table>
        </form>
    </div>
</div>



<?php include('partials/footer.php'); ?> 

<?php 
// value from form and save in the database 
// submit button clicked or not 

if (isset($_POST['submit']))
{

    // get data from form 
   $full_name = $_POST['full_name'];
   $username = $_POST['username'];
   $password = md5($_POST['password']);

//    sql query to save data into database 

$sql = "INSERT INTO tbl_admin SET 
    full_name='$full_name',
    username='$username',
    password='$password'
";

    // executing query and saving data into database 


    $res = mysqli_query($conn, $sql) or die(mysqli_error()); 

// data inserted 
    if($res==TRUE)
    {
        // create a session variable to display message 
        $_SESSION['add'] = "Admin Added Successfully";
        // redirect page to manage admin
        header("location:".SITEURL.'/admin/manage-admin.php');
    }
    else
    {
        // data failed 
        // create a session variable to display message 
        $_SESSION['add'] = "Failed To Add Admin";
        // redirect page to add admin
        header("location:".SITEURL.'/admin/add-admin.php');
    }
}
?> 