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
  <header id="header" class="header fixed-top d-flex align-items-center">

    <div class="d-flex align-items-center justify-content-between">
      <a href="admin.php" class="logo d-flex align-items-center">
        
        <span class="d-none d-lg-block">Faculty</span>
      </a>
      <i class="bi bi-list toggle-sidebar-btn"></i>
    </div><!-- End Logo -->

    <div class="search-bar">
      <form class="search-form d-flex align-items-center" method="POST" action=" ">
        <input type="text" name="query" placeholder="Search" title="Enter search keyword">
        <button type="submit" title="Search"><i class="bi bi-search"></i></button>
      </form>
    </div><!-- End Search Bar -->

    <nav class="header-nav ms-auto">
      <ul class="d-flex align-items-center">

        <li class="nav-item d-block d-lg-none">
          <a class="nav-link nav-icon search-bar-toggle " href="#">
            <i class="bi bi-search"></i>
          </a>
        </li><!-- End Search Icon-->

       

        <li class="nav-item dropdown pe-3">

          <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
            <img src="assets/img/login.png" alt="Profile" class="rounded-circle">
            <span class="d-none d-md-block dropdown-toggle ps-2">Faculty</span>
          </a><!-- End Profile Iamge Icon -->

          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li class="dropdown-header">
              <h6>Faculty</h6>
              <span>KIET GROUP OF INSTITUTIONS</span>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>

            <li>
              <a class="dropdown-item d-flex align-items-center" href="faculty-profile.php">
                <i class="bi bi-person"></i>
                <span>My Profile</span>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>

           
            <li>
              <a class="dropdown-item d-flex align-items-center" href="signout.php">
                <i class="bi bi-box-arrow-right"></i>
                <span>Sign Out</span>
              </a>
            </li>

          </ul><!-- End Profile Dropdown Items -->
        </li><!-- End Profile Nav -->

      </ul>
    </nav><!-- End Icons Navigation -->

  </header><!-- End Header -->

  <!-- ======= Sidebar ======= -->
  <aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">

      <li class="nav-item">
        <a class="nav-link " href="faculty-dashboard.php">
          <i class="bi bi-grid"></i>
          <span>Dashboard</span>
        </a>
      </li><!-- End Dashboard Nav -->

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-menu-button-wide"></i><span>Placement Drives</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="faculty-drives.php">
              <i class="bi bi-circle"></i><span>View Drives</span>
            </a>
          </li>
          
        </ul>
      </li>

      <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-layout-text-window-reverse"></i><span>Students</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
        <li>
            <a href="add-student.php">
              <i class="bi bi-circle"></i><span>Add Students</span>
            </a>
          </li> 
        <li>
            <a href="view-student.php">
              <i class="bi bi-circle"></i><span>View Students</span>
            </a>
          </li>
          <li>
            <a href="placed-student.php">
              <i class="bi bi-circle"></i><span>Placed Student List</span>
            </a>
          </li>
          <li>
            <a href="unplaced-student.php">
              <i class="bi bi-circle"></i><span>Unplaced Student List</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
  <!-- End Sidebar-->

  <main id="main" class="main">

    <div class="pagetitle">
      <h1>Dashboard</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="admin.php">Home</a></li>
          <li class="breadcrumb-item active">view drives</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->
    <section class="section dashboard">
      <div class="row">

        <!-- Left side columns -->
        <div class="col-lg-8">
          <div class="row">
  <form class="row g-3" action="" method="POST">
                <!--user id-->
                <div class="col-md-6">
                  <label for="validationDefault01" class="form-label">User ID</label>
                  <input type="text" name="id" class="form-control" id="validationDefault01" value="" required>
                </div>
                <!--Name-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">Name</label>
                  <input type="text" name="fname" class="form-control" id="validationDefault02" value="" required>
                </div>
                
                <!--course-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">Course</label>
                  <input type="text" name="course" class="form-control" id="validationDefault02" value="" required>
                </div>
                <!--Roll Number-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">Roll Number</label>
                  <input type="text" name="roll" class="form-control" id="validationDefault02" value="" required>
                </div>
                <!--contact-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">Contact</label>
                  <input type="text" name="contact" class="form-control" id="validationDefault02" value="" required>
                </div>
                <!--E-mail-->
                <div class="col-md-6">
                  <label for="validationDefaultUsername" class="form-label">E-mail</label>
                  <div class="input-group">
                    <span class="input-group-text" id="inputGroupPrepend2">@</span>
                    <input type="text" name="email" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required>
                  </div>
                </div>
                <!--Date of birth-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">DOB</label>
                  <input type="date" name="dob" class="form-control" id="validationDefault02" value="" required>
                </div>
                <!--class roll number-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">classroll_no</label>
                  <input type="text" name="classroll" class="form-control" id="validationDefault02" value="" required>
                </div>
                <!--Section-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">section</label>
                  <input type="text" name="section" class="form-control" id="validationDefault02" value="" required>
                </div>
                <!--10%-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">10th%</label>
                  <input type="text" name="10th" class="form-control" id="validationDefault02" value="" required>
                </div>
               
                <!--12%-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">12th%</label>
                  <input type="text" name="12th" class="form-control" id="validationDefault02" value="" required>
                </div>
               
                <!--Graduation %-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">Graduation %</label>
                  <input type="text" name="graduation" class="form-control" id="validationDefault02" value="" required>
                </div>
                
                <!--Post Graduation %-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">Post Graduation %</label>
                  <input type="text" name="pg" class="form-control" id="validationDefault02" value="" required>
                </div>
               
                <!--Backlog-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">Backlog</label>
                  <input type="text" name="backlog" class="form-control" id="validationDefault02" value="" required>
                </div>
                <!--Gap-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">Gap</label>
                  <input type="text" name="gap" class="form-control" id="validationDefault02" value="" required>
                </div>
                <!--Placemenrt status-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">Placement status</label>
                  <input type="text" name="status1" class="form-control" id="validationDefault02" value="" required>
                </div>
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">Set Password</label>
                  <input type="password" name="pass" class="form-control" id="validationDefault02" value="" required>
                </div>
                <div class="col-12">
        <input class="btn btn-primary" type="submit" name="submit">
        <button class="btn btn-danger" type="button" onclick="window.location.reload();">Cancel</button>
                </div>
              </form>
                </div>
            </div>
         </div>
    </section>
</main>
<?php


include "connection.php";


if(isset($_POST['submit']))
{
$id = $_POST['id'];
$name = $_POST['fname'];
$course = $_POST['course'];
$dob = $_POST['dob'];
$email = $_POST['email'];
$ten = $_POST['10th'];
$twel = $_POST['12th'];
$gap = $_POST['gap'];
$pass = $_POST['pass'];
$backlog = $_POST['backlog'];
$roll = $_POST['roll'];
$croll = $_POST['classroll'];
$grad = $_POST['graduation'];
$pg = $_POST['pg'];
$cont = $_POST['contact'];
$status = $_POST['status1'];
$sec = $_POST['section'];

    $insertQuery = "INSERT INTO `student_details` VALUES ('$id','$pass','$name','$course','$roll','$email','$cont','$dob','$croll',
     '$sec','$ten','$twel','$grad','$pg','$backlog','$gap','$status','null','null')";
    $result = mysqli_query($connectQuery,$insertQuery);
    if ($result) {
     ?><script>alert("data inserted")</script>
     <?php   } else {
      echo "Error: " . $sql . "<br>" . mysqli_error($connectQuery);
    }
  }
  mysqli_close($connectQuery); 
   

?>
    <footer id="footer" class="footer">
    <div class="copyright">
      &copy; Copyright <strong><span>Kietians</span></strong>. All Rights Reserved
    </div>
    
  </footer><!-- End Footer -->

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
  <!-- <script>
  var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = document.getElementByclass('form-control').value;
    if(!regName.test(name)){
        alert('Invalid name given.');
    }else{
        alert('Valid name given.');
    }
    </script> -->

</body>

</html>