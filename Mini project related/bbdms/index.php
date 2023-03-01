<?php
error_reporting(0);
include('includes/config.php');
?>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>KLNAV-WAY TO LIFE</title>
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="css/modern-business.css" rel="stylesheet">
    <style>
    .navbar-toggler {
        z-index: 1;
    }
    
    @media (max-width: 576px) {
        nav > .container {
            width: 100%;
        }
    }
    .carousel-item.active,
    .carousel-item-next,
    .carousel-item-prev {
        display: block;
    }
    </style>

</head>

<body>

    <!-- Navigation -->
<?php include('includes/header.php');?>
<?php include('includes/slider.php');?>
   
    <!-- Page Content -->
	<br>
	
    <div class="container">
<center> <h1 class="my-4">Donation highlights</h1></center>
       

        <!-- Marketing Icons Section -->
		<br>
        <div class="row">
            <div class="col-lg-4 mb-4">
                <div class="card">
				
                   <center> <h5 class="card-header">Donate plasma</h5> </center>
                   <img class="img-fluid rounded" src="images/img1.jpg" alt="">
                       <br> <p class="card-text" style="padding-left:2%">Plasma is needed to create unique life-saving medicines to help save and transform the lives of over 17,000 people each year. Amazingly, this medicine is in you. Give plasma and help save lives.</p>
                </div>
            </div>
            <div class="col-lg-4 mb-4">
                <div class="card">
                    <h5 class="card-header">Want to donate for the first time?</h5>
				
					
					<img class="img-fluid rounded" src="images/img2.jpg" alt="">
                   
                       <br> <p class="card-text" style="padding-left:2%"><br>We always need new donors, new energy for blood. Let us take you through the steps to becoming a donor and the process of getting that first appointment booked by just filling a 'Conatct us' form.</p>
                </div>
            </div>
            <div class="col-lg-4 mb-4">
                <div class="card">
                    <h5 class="card-header">Coronavirus update</h5>
                   <img class="img-fluid rounded" src="images/img3.jpg" alt="">
                       <br> <p class="card-text" style="padding-left:2%">National restrictions may have lifted, but we still have extra safety measures in place at our centres. Read the latest advice before coming to donate. </p>
                </div>
            </div>
        </div>
        <!-- /.row -->

<hr>
        <!-- Features Section -->
       <br>
	   <br>
	   <br>
         
		   <div class="col" >
		     <center> 
                <h2>EDUCATIONAL SYMPOSIUMS</h2>
          <p>Learn more about blood quality.</p> </center>
               
                    <div align "left" >        
                <p>Red blood cell (RBC) quality can be compromised by numerous factors related to donor variability, processing, and storage solutions.1 RBCs experience progressive damage during storage that affects their viability and ability to deliver oxygen, impairs their deformability through the vasculature and increases the generation of potentially harmful biochemical mediators.2,3 More than 100 million units of blood are collected worldwide each year, yet the indication for RBC transfusion and the optimal length of RBC storage prior to transfusion may not have been achieved.4 It is for these reasons that Hematologists, transfusion doctors, treating physicians, and scientists want to stay current on the dynamics of blood quality as it is key to the safety of patients.</p>
				<br>
				<p>This webpage is dedicated to advancing scientific understanding of critical topics from the perspectives of leaders within the transfusion community. We invite you to watch the presentations below. Please return to this page frequently to access additional brief presentations on issues of importance to you.</p>
				</div>
				</div>
			
            
  
        <!-- /.row -->


<hr>
<br>
<br>

        <!-- Portfolio Section -->
		<center> <h1 class="my-4">Some of the Donar</h1></center>

        <div class="row">
                   <?php 
$status=1;
$sql = "SELECT * from tblblooddonars where status=:status order by rand() limit 3";
$query = $dbh -> prepare($sql);
$query->bindParam(':status',$status,PDO::PARAM_STR);
$query->execute();
$results=$query->fetchAll(PDO::FETCH_OBJ);
$cnt=1;
if($query->rowCount() > 0)
{
foreach($results as $result)
{ ?>

            <div class="col-lg-4 col-sm-6 portfolio-item">
                <div class="card h-100">
                    <a href="#"><img class="card-img-top img-fluid" src="images/blood-donor.jpg" alt="" ></a>
                    <div class="card-block">
                        <h4 class="card-title"><a href="#"><?php echo htmlentities($result->FullName);?></a></h4>

<p class="card-text"><b>Blood Group :</b> <?php echo htmlentities($result->BloodGroup);?></p>

                    </div>
                </div>
            </div>

            <?php }} ?>
          
 



        </div>
        <!-- /.row -->


      <hr>
		<br>

        <!-- Call to Action Section -->
        <div class="row mb-4">
            <div class="col-md-8">
            <h4>UNIVERSAL DONORS AND RECIPIENTS</h4>
                <p>
The most common blood type is O, followed by type A.

Type O individuals are often called "universal donors" since their blood can be transfused into persons with any blood type. Those with type AB blood are called "universal recipients" because they can receive blood of any type.</p>
            </div>
            </center><div class="col-md-4">
                <a class="btn btn-lg btn-secondary btn-block" href="search-donor.php">Search Blood</a>
            </div></center>
        </div>

    </div>
    <!-- /.container -->

    <!-- Footer -->
  <?php include('includes/footer.php');?>

    <!-- Bootstrap core JavaScript -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/tether/tether.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>

</body>

</html>
