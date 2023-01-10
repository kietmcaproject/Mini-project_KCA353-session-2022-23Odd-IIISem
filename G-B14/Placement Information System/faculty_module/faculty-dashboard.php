<?php  include "connection.php";?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Faculty Dashboard</title>
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
  <?php include 'header.php'?>
 <!-- End Header -->

  <!-- ======= Sidebar ======= -->
  <?php include 'side-bar.php'?>
  <!-- End Sidebar-->

  <main id="main" class="main">

    <div class="pagetitle">
      <h1>Dashboard</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="admin.php">Home</a></li>
          <li class="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->

    <section class="section dashboard">
      <div class="row">

        <!-- Left side columns -->
        <div class="col-lg-12">
          <div class="row">

            <!-- Sales Card -->
            <div class="col-xxl-3 col-md-6">
              <div class="card info-card sales-card">
                <div class="card-body">
                  <h5 class="card-title">Total students <!--<span>| Today</span>--></h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i class="bi bi-people"></i>
                    </div>
                    <div class="ps-3">
                      <h6><?php 
                     
                      $selectQuery = "SELECT COUNT(user_id) as `total` FROM `student_details`";
                      $result = mysqli_query($connectQuery,$selectQuery);
                      $row = mysqli_fetch_assoc($result);
                      
                        echo $row['total'];
                      
                      ?></h6>
                     
                    </div>
                  </div>
                </div>

              </div>
            </div><!-- End Sales Card -->

           
            <!-- End Revenue Card -->

            <!-- Customers Card -->
            <div class="col-xxl-3 col-xl-12">
              <div class="card info-card customers-card">
               
                <div class="card-body">
                  <h5 class="card-title">Placed Students</h5>
                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-people"></i>
                    </div>
                    <div class="ps-3">
                      <h6><?php 
                     
                     $selectQuery = "SELECT COUNT(user_id) as `total` FROM `student_details` where placement_status='yes'";
                     $result = mysqli_query($connectQuery,$selectQuery);
                     $row = mysqli_fetch_assoc($result);
                     
                       echo $row['total'];
                     
                     ?></h6>
                     </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Unplaced students Card -->
            <div class="col-xxl-3 col-xl-12">
              <div class="card info-card customers-card">
               
                <div class="card-body">
                  <h5 class="card-title">Unplaced</h5>
                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-people"></i>
                    </div>
                    <div class="ps-3">
                      <h6><?php 
                     
                     $selectQuery = "SELECT COUNT(user_id) as `total` FROM `student_details` where placement_status<>'yes'";
                     $result = mysqli_query($connectQuery,$selectQuery);
                     $row = mysqli_fetch_assoc($result);
                     
                       echo $row['total'];
                     
                     ?></h6>
                     </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-3 col-xl-12">
              <div class="card info-card customers-card">
               
                <div class="card-body">
                  <h5 class="card-title">Total Companies </h5>
                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-building"></i>
                    </div>
                    <div class="ps-3">
                      <h6><?php 
                     
                     $selectQuery = "SELECT COUNT(*) as `total` FROM `drive_details`";
                     $result = mysqli_query($connectQuery,$selectQuery);
                     $row = mysqli_fetch_assoc($result);
                     
                       echo $row['total'];
                     
                     ?></h6>
                     </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Customers Card -->
           <!-- Bar Chart -->
           <?php 
                     
                     $selectQuery = "SELECT COUNT(user_id) as `total` FROM `student_details` where course in ('MCA','Mca') and placement_status='yes'";
                     $selectQuery1 = "SELECT COUNT(user_id) as `total` FROM `student_details` where course in ('BTECH','Btech')  and placement_status='yes'";
                     $selectQuery2 = "SELECT COUNT(user_id) as `total` FROM `student_details` where course in ('BPHARMA','Bphrama')  and placement_status='yes'";
                     $selectQuery3 = "SELECT COUNT(user_id) as `total` FROM `student_details` where course in ('MBA','Mba')  and placement_status='yes'";
                     $result = mysqli_query($connectQuery,$selectQuery);
                     $row1 = mysqli_fetch_assoc($result);
                     $result = mysqli_query($connectQuery,$selectQuery1);
                     $row2 = mysqli_fetch_assoc($result);
                     $result = mysqli_query($connectQuery,$selectQuery2);
                     $row3 = mysqli_fetch_assoc($result);
                     $result = mysqli_query($connectQuery,$selectQuery3);
                     $row4 = mysqli_fetch_assoc($result);
                     
                       
                     
                     ?>
           <div class="col-12">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Bar CHart</h5>
                        <!-- Bar Chart -->
                        <canvas id="barChart" style="max-height: 400px;max-width:800px;"></canvas>
                        <script>
                          document.addEventListener("DOMContentLoaded", () => {
                            new Chart(document.querySelector('#barChart'), {
                              type: 'bar',
                              data: {
                                labels: ['BTech', 'MCA', 'Bpharma', 'MBA',],
                                datasets: [{
                                  label: 'Bar Chart',
                                  data: [<?php echo $row2['total'];?>,<?php echo $row1['total'];?>, <?php echo $row3['total'];?>, <?php echo $row4['total'];?>],
                                  backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(255, 159, 64, 0.2)',
                                    'rgba(255, 205, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(201, 203, 207, 0.2)'
                                  ],
                                  borderColor: [
                                    'rgb(255, 99, 132)',
                                    'rgb(255, 159, 64)',
                                    'rgb(255, 205, 86)',
                                    'rgb(75, 192, 192)',
                                    'rgb(54, 162, 235)',
                                    'rgb(153, 102, 255)',
                                    'rgb(201, 203, 207)'
                                  ],
                                  borderWidth: 1
                                }]
                              },
                              options: {
                                scales: {
                                  y: {
                                    beginAtZero: true
                                  }
                                }
                              }
                            });
                          });
                        </script>
                      </div>
                    </div>
                  </div>
                <!-- Bar Chart -->
                </div>
              </div>

  </main>
  <!-- End #main -->

  <?php include "footer.php"?>

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