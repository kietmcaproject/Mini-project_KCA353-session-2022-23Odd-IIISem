<?php 

include "Registration.php";

$sql = "SELECT * FROM detailsofcompany";

$result = $conn->query($sql);

?>

<!DOCTYPE html>

<html>

<head>

    <title>View Page</title>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
 

    <link rel="stylesheet" href="Style.css">

    <link rel="stylesheet" href="style1.css">
    <style>
      footer {
  text-align: center;
  padding: 3px;
  background-color: white;
  color: white;
}

    </style>


</head>

<body>


    <div>
        <a href="LandingPage.html" style="width:10%!important; height:10%; background-color: #FFFFFF;  justify-content: end!important;"><button>Logout</button></a>
    </div>

    <div class="container">

        <h2>Hiring Company</h2>
        <form>
<table class="table" border="10px">

    <thead>

        <tr>

        <th>Details</th>

        <th>Eligibility</th>

        <th>Url Form</th>

       

    </tr>

    </thead>

    <tbody> 

        <?php

            if ($result->num_rows > 0) {

                while ($row = $result->fetch_assoc()) {

        ?>

                   
                    <tr>

<td><?php echo $row['Details']; ?></td>


<td><?php echo $row['Eligibilty']; ?></td>

<td><?php echo $row['Form']; ?></td>





</tr> 
                                     

        <?php       }

            }

        ?>                

    </tbody>

</table>
</form>
    </div> 
    <section>
    <footer>
      <a href="LandingPage.html">Exit</a>
    </footer>
    </section>
    
</body>


</html>
