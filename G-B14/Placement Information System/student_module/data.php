<?php
// $connectQuery  = mysqli_connect('localhost','root');
// mysqli_select_db($connectQuery,'student');

// if(mysqli_connect_errno()){
//     echo mysqli_connect_error();
//     exit();
// }else{
//    echo "connected";
// }

// $id=$_REQUEST['id'];
// $cname=$_REQUEST['company'];
// $opt=$_REQUEST['opt'];
// $file=$_REQUEST['myfile'];
// // $dob=$_POST['dob'];
// // $email=$_POST['email'];
// // $ten=$_POST['10th'];
// // $twel=$_POST['12th'];
// // $gap=$_POST['gap'];
// // $pass=$_POST['pass'];
// // $backlog=$_POST['backlog'];
// // $roll=$_POST['roll'];
// // $croll=$_POST['classroll'];
// // $grad=$_POST['graduation'];
// // $pg=$_POST['pg'];
// // $cont=$_POST['contact'];
// // $status=$_POST['status1'];
// // $sec=$_POST['section'];

//     $sqlc = "INSERT INTO `student_details` (`company_name`,`placement_status`,`proof`)
//      VALUES ('$id','$cname','$opt','$file') where user_id='$id'";
//     $result = mysqli_query($connectQuery,$sqlc);
//     if ($result) {
//       echo "New student added successfully";
//     } else {
//       echo "Error: " . $sql . "<br>" . mysqli_error($connectQuery);
//     }
    
    $conn = mysqli_connect("localhost", "root", "", "placement information system");
         
        // Check connection
        if($conn === false){
            die("ERROR: Could not connect. "
                . mysqli_connect_error());
        }
        else{
            echo "connected";
        }
         
        // Taking all 5 values from the form data(input)
        if(isset($_POST['submit']))
       { $id=$_POST['id'];
        $cname=$_POST['company'];
        $opt=$_POST['opt'];
        $file=$_POST['file'];
        // Performing insert query execution
        // here our table name is college
        $sql = "UPDATE `student_details` SET `placement_status`='$opt',`company_name`='$cname',`proof`='$file' WHERE user_id='$id'";
         
        if(mysqli_query($conn, $sql)){
            echo "<h3>data stored in a database successfully."
                . " Please browse your localhost php my admin"
                . " to view the updated data</h3>";
        } else{
            echo "ERROR: Hush! Sorry $sql. "
                . mysqli_error($conn);
        }
    
        // Close connection
        mysqli_close($conn);
    }


?>