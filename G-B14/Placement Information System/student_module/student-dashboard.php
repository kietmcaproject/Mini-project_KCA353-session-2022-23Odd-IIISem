<?php


include "connection.php";
    $selectQuery = "SELECT * FROM `student_details` where user_id='2124mca1127'";
    $result = mysqli_query($connectQuery,$selectQuery);
    if(mysqli_num_rows($result) > 0){
    }else{
        $msg = "No Record found";
    }


$row = mysqli_fetch_assoc($result);
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Dashboard</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.gstatic.com" rel="preconnect">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/quill/quill.snow.css" rel="stylesheet">
  <link href="assets/vendor/quill/quill.bubble.css" rel="stylesheet">
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
  <link href="assets/vendor/simple-datatables/style.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">

  <!-- =======================================================
  * Template Name: NiceAdmin - v2.4.1
  * Template URL: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<body>

  <!-- ======= Header ======= -->
  <!-- End Header -->
  <?php include 'header.php'?>
  <!-- ======= Sidebar ======= -->
  <?php include 'side-bar.php'?>
  <!-- End Sidebar-->

  <main id="main" class="main">

    <div class="pagetitle">
      <h1>Dashboard</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="student-dashboard.html">Home</a></li>
          <li class="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->

    <section class="section profile">
   
   <div class="row">
     <div class="col-xl-4">

       <div class="card">
         <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">

           <img src="assets/img/login.png" alt="Profile" class="rounded-circle">
           <h2><?php echo $row['name']; ?></h2>
           <h3><?php echo $row['course']; ?> Student</h3>
           
         </div>
       </div>

     </div>

     <div class="col-xl-8">

       <div class="card">
         <div class="card-body pt-3">
           
           <div class="tab-content pt-2">

             <div class="tab-pane fade show active profile-overview" id="profile-overview">
               
               <h5 class="card-title">Profile Details</h5>

               <div class="row">
               <div class="row">
                 <div class="col-lg-3 col-md-4 label">User ID</div>
                 <div class="col-lg-9 col-md-8"><?php echo $row['user_id']; ?></div>
               </div>
                 <div class="col-lg-3 col-md-4 label ">Full Name</div>
                 <div class="col-lg-9 col-md-8"><?php echo $row['name']; ?></div>
               </div>

               <div class="row">
                 <div class="col-lg-3 col-md-4 label">Course</div>
                 <div class="col-lg-9 col-md-8"><?php echo $row['course']; ?></div>
               </div>
               

               <div class="row">
                 <div class="col-lg-3 col-md-4 label">University Roll No </div>
                 <div class="col-lg-9 col-md-8"><?php echo $row['roll_no']; ?></div>
               </div>

               <div class="row">
                 <div class="col-lg-3 col-md-4 label">DOB</div>
                 <div class="col-lg-9 col-md-8"><?php echo $row['dob']; ?></div>
               </div>
               <div class="row">
                 <div class="col-lg-3 col-md-4 label">Email</div>
                 <div class="col-lg-9 col-md-8"><?php echo $row['email_id']; ?></div>
               </div>
              
              <div class="row">
                 <div class="col-lg-3 col-md-4 label">Placement status</div>
                 <div class="col-lg-9 col-md-8"><?php if($row['placement_status']=='yes')echo "Placed";else echo "unplaced"; ?></div>
               </div>
             </div>
             </div>

           
           </div><!-- End Bordered Tabs -->

         </div>
       </div>

     </div>
   </div>
 </section>
 <section class="section dashboard">
      <div class="row">

        <!-- Left side columns -->
        <div class="col-lg-8">
          <div class="row">

  <table class="table table-borderless datatable">
  <thead>
    <!-- <tr style="background-color:#ffccff;">
      <th scope="col">#</th>
      <th scope="col">Company Name</th>
      <th scope="col">Eligible branches</th>
      <th scope="col">Job Profile</th>
      <th scope="col">CTC</th>
     
    </tr> -->
  </thead>
  <tbody>
 
 <?php
      //        $selectQ = "SELECT * FROM `drive_details`";
      //        $res = mysqli_query($connectQuery,$selectQ);
      //        $nor =mysqli_num_rows($res);
      //        if($nor > 0){
      //        }else{
      //            $msg = "No Record found";
      //        }
      //       $n=1;
      // if( $nor==0 ){
      //   echo '<tr><td colspan="7">No Record found</td></tr>';
      // }else{
      //   while($row = mysqli_fetch_assoc($res)){
      //     echo "<tr><td>{$n}</td><td>{$row['company_name']}</td><td>{$row['eligible_branches']}</td><td>{$row['job_profile']}</td><td>{$row['ctc']} LPA</td></tr>\n";
      //       $n++;
      //   }
       
      // }
      
    ?> 
  </tbody>
         </table>

                </div>
            </div>
         </div>
    </section>
  </main>
  <!-- End #main -->

  <!-- ======= Footer ======= -->
  <?php include "footer.php"?><!-- End Footer -->

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/apexcharts/apexcharts.min.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/chart.js/chart.min.js"></script>
  <script src="assets/vendor/echarts/echarts.min.js"></script>
  <script src="assets/vendor/quill/quill.min.js"></script>
  <script src="assets/vendor/simple-datatables/simple-datatables.js"></script>
  <script src="assets/vendor/tinymce/tinymce.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>

</body>

</html>