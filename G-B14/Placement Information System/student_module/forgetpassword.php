<!doctype html>

<html>
<head>
    <title>Forget Password</title>
    <link rel="stylesheet" href="css/login.css" type="text/css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
   
<div class="wrapper">
        <div class="logo">
           <img src="images/login.png" alt="">
           </div>
              <br/> 
        <form class="p-3 mt-3" action="setpassword.php">
        <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="UserId">
            </div>
            <div class="form-field d-flex align-items-center">
                <span class="far fa-user"></span>
                <input type="text" name="userName" id="userName" placeholder="Date Of Birth" >
            </div>
           
            <button class="btn mt-3" type="submit">Verify</button>
        </form>
       
    </div>
</body>
</html>