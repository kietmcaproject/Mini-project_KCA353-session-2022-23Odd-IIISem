
<!doctype html>

<html>
<head>
    <title>Login</title>
    <link rel="stylesheet" href="css/login.css" type="text/css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
   
<div class="wrapper">
        <div class="logo">
           <img src="images/login.png" alt="">
           </div>
             
        
        
        <form class="p-3 mt-3" action="faculty_module/faculty-dashboard.php" method="post">
       
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Username" >
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="fas fa-key"></span>
                <input type="password" name="password" id="pwd" placeholder="Password" >
            </div>
            <button class="btn mt-3" type="submit">Login</button>
        </form>
        <div class="text-center fs-6">
            <a href="forgetpassword.php">Forget password?</a>
        </div>
    </div>
    <script>
function validateForm() { 
  let x = document.forms["p-3"]["userName"].value;
  let y= document.forms["p-3"]["password"].value;
  if (x == "" || y=="") {
    alert("Please enter user id and password");
    return false;
  }
}
</script>
</body>
</html>
