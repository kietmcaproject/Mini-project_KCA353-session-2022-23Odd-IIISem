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
  <?php include 'header.php'?>
  <!-- ======= Sidebar ======= -->
  <?php include 'side-bar.php'?>
  <main id="main" class="main">
    <div class="pagetitle">
      <h1>Dashboard</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="admin.php">Home</a></li>
          <li class="breadcrumb-item active">faculty</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->
    <section class="section dashboard">
      <div class="row">
        <!-- Left side columns -->
        <div class="col-lg-8">
        <form action="" method="POST" class="row g-3">
                <!--user id-->
            <div class="col-md-6">
                  <label for="validationDefault01" class="form-label">User ID</label>
                  <input type="text" class="form-control" name="user_id" id="validationDefault01" placeholder="user_id" required>
                </div>
                <!--Name-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">Name</label>
                  <input type="text" class="form-control" name="name" id="validationDefault02" placeholder="name" required>
                </div>
                <!--E-mail-->
                <div class="col-md-6">
                  <label for="validationDefaultUsername" class="form-label">E-mail</label>
                  <div class="input-group">
                    <span class="input-group-text" id="inputGroupPrepend2">@</span>
                    <input type="text" class="form-control" name="e-mail" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" placeholder="e-mail" required>
                  </div>
                </div> 
                <!--Department-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">Department</label>
                  <input type="text" class="form-control" name="department" id="validationDefault02" placholder="department"required>
                </div>
                <!--Assigned class-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">Assigned class</label>
                  <input type="text" class="form-control" name="assigned_class" id="validationDefault02"  placeholder="assigned_class" required>
                </div>
                <!--Designation-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">Designation</label>
                  <input type="text" class="form-control" name="designation" id="validationDefault02" placeholder="designation" required>
                </div>
                
                <!--image-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">password</label>
                  <input type="file" class="form-control" name="pass" id="validationDefault02" value="image" required>
                </div>
                
                
                
                <div class="col-12">
                  <button class="btn btn-primary" type="submit">Submit</button>
                </div>
              </form>
              <!-- End Browser Default Validation -->
          </div>
        </form>     
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
  <?php
        include 'connection.php';
        if(isset($_POST['submit'])){
            // $user_id = $_POST['user_id'];
            $name = $_POST['name'];
            $email = $_POST['e-mail'];
            $department = $_POST['department'];
            $assignedclass = $_POST['assigned_class'];
            $designation = $_POST['designation'];
            $pass=$_POST['pass'];
            // $image =$_POST['image'];

            $insertquery = "INSERT INTO faculty_details VALUES ('$user_id','$name','$department','$assigned_class','$designation','$email','$pass')";

            $res = mysqli_query($connectQuery,$insertquery);

            if($res){
                ?>
                <script>
                alert("data inserted");
                </script>
                
                <?php
            }else{
    ?>
    <script>
        alert ('not inserted');
    </script>
    <?php
            }

        }
        $connectQuery -> close();
?>

</body>

</html>