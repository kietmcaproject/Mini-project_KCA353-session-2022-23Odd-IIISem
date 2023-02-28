<?php include('partials/menu.php'); ?>

<div class="main-content">
    <div class="Wrapper">
        <h1>Add Category</h1>
        <br><br>

        <?php
            if(isset($_SESSION['add'])){  
                echo $_SESSION['add']; 
                unset($_SESSION['add']); 
            }
            if(isset($_SESSION['upload'])){  
                echo $_SESSION['upload']; 
                unset($_SESSION['upload']); 
            }
        ?>

        <br><br>



    <!-- add category form start  -->
        <form action="" method="POST" enctype="multipart/form-data">
            <table class="tbl-30">
                <tr>
                    <td>
                        Title: 
                    </td>
                    <td>
                        <input type="text" name="title" placeholder="Category Title">
                    </td>
                </tr>

                <tr>
                    <td>Select Image: </td>
                    <td>
                        <input type="file" name="image">
                    </td>
                </tr>

                <tr>
                    <td>Featured: </td>
                    <td>
                        <input type="radio" name="featured" value="Yes">Yes
                        <input type="radio" name="featured" value="Yes">No
                    </td>
                </tr>
                <tr>
                    <td>Active: </td>
                    <td>
                    <input type="radio" name="active" value="Yes">Yes
                    <input type="radio" name="active" value="Yes">No
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <input type="submit" name="submit" value="Add Category" class="btn-secondary">
                    </td>
                </tr>
                
            </table>

        </form>



     <!-- add category form end  -->

     <?php
    //  button clicked or not 
        if(isset($_POST['submit'])){
           
        // get the value from category form 
            $title = $_POST['title'];
        // radio button selected or moy 
            if(isset($_POST['featured'])){
                $featured = $_POST['featured'];
            }
            else{
                $featured = "no";
            }
            if(isset($_POST['active'])){
                $active = $_POST['active'];
            }
            else{
                $active = 'no';
            }


            // image select or not 
            if(isset($_FILES['image']['name'])){
                // upload the image 
                $image_name = $_FILES['image']['name'];

                if($image_name!=""){

               

                    // auto rename image 
                    $ext = end(explode('.', $image_name));
                    
                    // rename the image 
                    $image_name ="$title".'-'.rand(000,999).'.'.$ext;

                    
                    $source_path = $_FILES['image']['tmp_name'];
                    $destination_path = "../images/category/".$image_name;

                    // upload the image 
                        $upload = move_uploaded_file($source_path, $destination_path);

                        // check image uploaded or noy 
                        if($upload == false){
                            $_SESSION['upload']="<div class='error'>Failed to upload image.</div>";
                            header("location:".SITEURL.'/admin/add-category.php');
                            //  stop the process 
                            die();
                        }
                }
            }
            else{
                // not upload 
                $image_name = "";
            }

            // create sql query insert category into database 
                $sql = "INSERT INTO tbl_category SET 
                title ='$title',
                image_name ='$image_name',
                featured = '$featured',
                active = '$active'
                ";
             // execute query saving database 
                    $res = mysqli_query($conn, $sql);  
                    
            // query execute or not and data added or not 
                    if($res==true){
                            // Query executed and catagory added 
                        $_SESSION['add'] = "<div class='success'>Category Added Successfully.</div>";
                        header("location:".SITEURL.'/admin/manage-category.php');
                    }
                    else{
                        $_SESSION['add'] = "<div class='error'>Failed Add category.</div>";
                        header("location:".SITEURL.'/admin/add-category.php');
                    }

         }
     
     
     ?>
    </div>
</div>


<?php include('partials/footer.php'); ?>