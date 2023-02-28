<?php include('partials/menu.php'); ?>

<div class="main-content">
    <div class="Wrapper">
        <h1>Add Food</h1>
        <br><br>

        <?php 
            if(isset($_SESSION['upload'])){ 
                echo $_SESSION['upload']; 
                unset($_SESSION['upload']); 
            }


        ?>

        <form action="" method="POST" enctype="multipart/form-data">

            <table class="tbl-30">
                <tr>
                    <td>Title: </td>
                    <td>
                        <input type="text" name="title" placeholder="Title of the food">
                    </td>
                </tr>
                <tr>
                    <td>Description: </td>
                    <td>
                        <textarea name="description" cols="30" rows="5" placeholder="Description of the food"></textarea>
                    </td>
                </tr>
                <tr>
                    <td>Price: </td>
                    <td>
                        <input type="number" name="price" placeholder="Price of the food">
                    </td>
                </tr>  
                <tr>
                    <td>Select Image: </td>
                    <td>
                        <input type="file" name="image">
                    </td>
                </tr> 
                <tr>
                    <td>Category: </td>
                    <td>
                        <select name="category">

                        <?php 
                    // display category from database 
                    // create sql get all active categories from database 
                        $sql = "SELECT * FROM tbl_category WHERE active = 'Yes'";
                    // execute query 
                        $res = mysqli_query($conn, $sql);
                    // check we have categories or not
                        $count = mysqli_num_rows($res);

                        if($count>0){
                            while($row=mysqli_fetch_assoc($res)){
                                $id = $row['id'];
                                $title = $row['title'];

                                ?>
                                <option value="<?php echo $id; ?>"><?php echo $title; ?></option>
                                <?php
                            }
                        }
                        else{
                            ?> 
                            <option value="0">No category found.</option>
                            <?php
                        }
                        
                        
                        
                        ?>


                                </select>
                    </td>
                </tr> 
                <tr>
                    <td>Featured: </td>
                    <td>
                        <input type="radio" name="featured" value="Yes">Yes
                        <input type="radio" name="featured" value="No">No
                    </td>
                </tr>
                <tr>
                    <td>Active: </td>
                    <td>
                        <input type="radio" name="active" value="Yes">Yes
                        <input type="radio" name="active" value="No">No
                    </td>
                </tr>

                <tr>
                    <td colspan="2">
                        <input type="submit" name="submit" value="Add Food" class="btn-secondary">
                        
                    </td>
                </tr>


            </table>


        </form>
                <?php
                    if(isset($_POST['submit'])){
                        // get the data from form

                        $title = $_POST['title'];
                        $description = $_POST['description'];
                        $price = $_POST['price'];
                        $category = $_POST['category'];

                        // check radio button featured and active are checked or not

                        if(isset($_POST['featured'])){
                            $featured = $_POST['featured'];
                        }
                        else{
                            $featured = "No";
                        }

                        if(isset($_POST['active'])){
                            $featured = $_POST['active'];
                        }
                        else{
                            $featured = "No";
                        }
                    // image upload if selected
                    
                            
                        if(isset($_FILES['image']['name'])){
                            $image_name = $_FILES['image']['name']; 
                    
                    // rename the image 

                            if($image_name != ""){
                                $ext = end(explode('.', $image_name));
                            
                    
                    // create new name for image 
                            
                            $image_name = "Food-Name-".rand(0000,9999).".".$ext;
                        
                    // uplaod the image 
                    // current location
                            $src = $_FILES['image']['tmp_name'];
                    // destination path
                            $dst = "../images/food/".$image_name;

                    // upload the image

                            $upload = move_uploaded_file($src, $dst);

                    // check image uploaded or not

                            if($upload==false){
                                $_SESSION['upload'] = "<div class='error'>Failed to upload image</div>";
                                header('location:'.SITEURL.'/admin/add-food.php');
                                die();
                            }
                            
                        }
                        }
                        else{
                            $image_name = "";
                        }
                    // insert into database 
                    // create sql query to add food 
                        $sql2 = "INSERT INTO tbl_food SET    
                        title = '$title',
                        description = '$description',
                        price = '$price',
                        image_name = '$image_name',
                        category_id = '$category',
                        featured = '$featured',
                        active = '$active'
                        ";

                    // execute the query 
                        
                        $res2 = mysqli_query($conn, $sql2);

                    // check data inserted or not 
                        if($res2 == true){
                            $_SESSION['add'] = "<div class='success'>Food added successfully</div>";
                            header("location:".SITEURL.'/admin/manage-food.php');
                        }
                        else{
                    
                            $_SESSION['add'] = "<div class='error'>Failed to add food</div>";
                            header("location:".SITEURL.'/admin/manage-food.php');
                        }

                    }


                ?>



    </div>
</div>

<?php include('partials/footer.php'); ?>  