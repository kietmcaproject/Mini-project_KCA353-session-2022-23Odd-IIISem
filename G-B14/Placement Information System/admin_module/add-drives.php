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
          <li class="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->

    <section class="section dashboard">
      <div class="row">

        <!-- Left side columns -->
        <div class="col-lg-8">
          <form action="" method="POST" class="row g-3  ">
                <!-- user id
                <div class="col-md-6">
                  <label for="validationDefault01" class="form-label">User ID</label>
                  <input type="text" class="form-control" name="user_id" id="validationDefault01" value="user id" required>
                </div> -->
    
                <!--Company Name-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">Company Name</label>
                  <input type="text" class="form-control" name="company_name" id="validationDefault02" placeholder="company Name" required>
                </div>
                <!--Branches-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">Branch</label>
                  <input type="text" class="form-control" name="branch" placeholder="Branch" id="validationDefault02" required>
                </div>
                <!--Eligible year-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">eligible year</label>
                  <input type="text" class="form-control" name="eligible_year" id="validationDefault02" placeholder="eligible year" required>
                </div>
                <!--criteria-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">criteria</label>
                  <input type="text" class="form-control" name="criteria" placeholder="criteria" id="validationDefault02" required>
                </div>
                
                <!--10%-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">Highschool %</label>
                  <input type="text" class="form-control" name="highschool" placeholder="Highschool %" id="validationDefault02" required>
                </div>
                
                <!--12%-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">Intermediate %</label>
                  <input type="text" class="form-control" name="intermediate" id="validationDefault02" placeholder="Intermediate %" required>
                </div>
                
                <!--Graduation %-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">Graduation%</label>
                  <input type="text" class="form-control" name="graduation%" id="validationDefault02" placeholder="Graduation%" required>
                </div>
                
                <!--Post Graduation %-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">Post Graduation %</label>
                  <input type="text" class="form-control" name="post_graduation" id="validationDefault02" placeholder="Post Graduation %" required>
                </div>
                
                <!--Backlog-->
                 <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">Backlog</label>
                  <input type="text" class="form-control" name="backlog" id="validationDefault02" placeholder="Backlog" required>
                </div> 
                <!--Gap-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">Gap</label>
                  <input type="text" class="form-control" name="gap" id="validationDefault02" placeholder="Gap" required>
                </div>
                <!--job profile-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">job profile</label>
                  <input type="text" class="form-control" name="job_profile" id="validationDefault02" placeholder="job profile" required>
                </div>
                <!--location-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">location</label>
                  <input type="text" class="form-control" name="location" id="validationDefault02" placeholder="location" required>
                </div>
                <!--CTC-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">ctc</label>
                  <input type="text" class="form-control" name="ctc" id="validationDefault02" placeholder="ctc" required>
                </div>
                <!--Joining-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">Joining</label>
                  <input type="text" class="form-control" name="joining" id="validationDefault02" placeholder="Joining" required>
                </div>
                <!--About-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">About</label>
                  <input type="text" class="form-control" name="about" id="validationDefault02" placeholder="About" required>
                </div>
                <!--image-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">image</label>
                  <input type="file" class="form-control" name="image" id="validationDefault02" placeholder="image" required>
                </div>
                <!--Link-->
                <div class="col-md-6">
                  <label for="validationDefault02" class="form-label">Link</label>
                  <input type="text" class="form-control" name="link" id="validationDefault02" placeholder="Link" required>
                </div>
                
                <div class="col-12">
                  <button class="btn btn-primary" name="submit" type="submit">Submit</button>
                </div>
              <!-- </form> -->
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
            $company_name = $_POST['company_name'];
            $branch = $_POST['branch'];
            $eligible_year = $_POST['eligible_year'];
            $criteria = $_POST['criteria'];
            $hsc = $_POST['highschool'];
            $ssc = $_POST['intermediate'];
            $grad = $_POST['graduation%'];
            $pg = $_POST['post_graduation'];
            $backlog = $_POST['backlog'];
            $gap = $_POST['gap'];
            $job_profile = $_POST['job_profile'];
            $location = $_POST['location'];
            $ctc = $_POST['ctc'];
            $joining = $_POST['joining'];
            $about = $_POST['about'];
            $image = $_POST['image'];
            $link = $_POST['link'];
            
           

            $insertquery = "INSERT INTO drive_details VALUES ('$company_name','$branch','$eligible_year','$criteria','$ssc','$hsc','$grad','$pg','$backlog','$gap','$job_profile','$location','$ctc','$joining','$about','$image','$link')";

            $a = mysqli_query($connectQuery,$insertquery);

            if($a){
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
?>
</body>

</html>