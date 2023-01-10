<?php include 'connection.php' ?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Admin Dashboard</title>
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
    <?php include 'header.php' ?>
  <!-- End Sidebar-->
    <?php include 'side-bar.php' ?>
  <main id="main" class="main">

    <div class="pagetitle">
      <h1>Dashboard</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="">View Drives</a></li>
          <li class="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->

    <section class="section dashboard">
      <div class="row">
      <div class="col-12  , /.;                                                                                                                                                                      ./">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">User_id</th>
                <th scope="col">Name</th>
                <th scope="col">E-mail</th>
                <th scope="col">Deprtment</th>
                <th scope="col">Assigned-Section</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>
            <?php 
              $selectquery =" select * from `faculty_details`";
              $query = mysqli_query($connectQuery,$selectquery);
              $nums = mysqli_num_rows($query);

              while($res = mysqli_fetch_array($query)){
                ?>
                <tr>
                <td><?php echo $res['user_id']?></td>
                <td><?php echo $res['name']?></td>
                <td><?php echo $res['email']?></td>
                <td><?php echo $res['department']?></td>
                <td><?php echo $res['assigned_class']?></td>
                <td>
                  <button class="btn btn-success mr-2">View</button>
                  <button class="btn btn-warning mr-2">Edit</button>
                  <button class="btn btn-danger">Delete</button>
                </td>

            <?php    
              }
           
            
            ?>
            </tbody>
          </table>
        </div>
      </div>
    </div>            
  </div>
</section>

  </main>
  <!-- End #main -->
  <!-- ======= Footer ======= -->
      <?php include 'footer.php'?>
  <!-- End Footer -->

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