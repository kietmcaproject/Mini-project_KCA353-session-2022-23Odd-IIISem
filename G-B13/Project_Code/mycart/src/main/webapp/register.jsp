<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>New User</title>

        <%@include file="components/common_css_js.jsp" %>
    </head>
    <body>

        <%@include  file="components/navbar.jsp" %>
        <div class="container-fluid">
            <div class="row mt-3">
                <div class="col-md-4 offset-md-4">                  

                    <div class="card">                        
                        <%@include  file="components/message.jsp" %>                        
                        <div class="card-body px-5">
                            <div class="container text-center">
                                <img src="img/add-friend.png"  style="max-width: 100px;" class="img-fluid" alt="">
                            </div>


                            <h3 class="text-center my-3">Sign up here !!</h3>

                            <form action="RegisterServlet" method="post" name = "validateForm" onsubmit="return(validate())">

                                <div class="form-group">
                                    <label for="name">User Name</label>
                                    <input name="user_name" type="text" class="form-control" id="name" placeholder="Enter here" aria-describedby="emailHelp">
                                </div>

                                <div class="form-group">
                                    <label for="email">User Email</label>
                                    <input name="user_email" type="email" class="form-control" id="email" placeholder="Enter here" aria-describedby="emailHelp">
                                </div>

                                <div class="form-group">
                                    <label for="password">User password</label>
                                    <input name="user_password" type="password" class="form-control" id="password" placeholder="Enter here" aria-describedby="emailHelp">
                                </div>

                                <div class="form-group">
                                    <label for="phone">User phone</label>
                                    <input name="user_phone" type="number" class="form-control" id="phone" placeholder="Enter here" aria-describedby="emailHelp">
                                </div>

                                <div class="form-group">
                                    <label for="phone">User Address</label>
                                    <textarea name="user_address" style="height: 200px;" class="form-control" placeholder="Enter your address"></textarea>


                                </div>

                                <div class="container text-center"> 
                                    <button class="btn btn-outline-success">Register</button>
                                    <button class="btn btn-outline-warning">Reset</button>

                                </div>


                            </form>


                        </div>

                    </div>

                </div>
            </div>



        </div>

        <script>
            var validate = () => {
            let name = document.validateForm.user_name
                    if (name.value == ""){
                    alert("name should not be blank")
                    name.focus()
                    return false
            }
            else if (name.value.length < 4 || name.value.length > 10){
            alert("Name length should be greater than 4 and less than 20")
                    name.focus()
                    return false
            }
            
            
            let emailID = document.validateForm.user_email
            if (emailID.value == "")
            {
            alert("Please provide your Email!")
            emailId.focus()
            return false
            }
//            atpos = emailID.indexOf("@")
//            dotpos = emailID.lastIndexOf(".")
//            else if (atpos < 1 || (dotpos - atpos < 2))
//            {
//            alert("Please enter correct email ID")
//                    emailId.focus()
//            return false
//            }
            }




            

        </script>
    </body>
</html>
