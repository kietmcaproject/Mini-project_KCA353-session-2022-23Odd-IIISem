import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const SignUp = () => {
  const emailRef = useRef("");
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const mobileNumRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  async function submitSignUp(event) {
    event.preventDefault();
    const user = {
      emailId: emailRef.current.value,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      mobileNum: mobileNumRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
    };

    const response = await fetch("http://localhost:8080/user/signup", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      navigate("/login");
    }
  }
  return (
    <section className="vh-100 bg-image gradient-custom-3">
      <div className="mask d-flex align-items-center h-100 gradient-custom-4">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card">
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    New User Registration
                  </h2>

                  <form onSubmit={submitSignUp}>
                    <br></br>
                    <label htmlFor="email">
                      <h6>Email_Id / UserName:</h6>
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="form-control"
                      placeholder="Email/Username"
                      required={true}
                      ref={emailRef}
                    />
                    <br></br>
                    <label htmlFor="firstname">
                      <h6>First_Name:</h6>
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      className="form-control"
                      placeholder="FirstName"
                      required={true}
                      ref={firstNameRef}
                    />
                    <br></br>
                    <label htmlFor="lastName">
                      <h6>Last_Name:</h6>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="form-control"
                      placeholder="lastName"
                      required={true}
                      ref={lastNameRef}
                    />
                    <br></br>
                    <label htmlFor="phoneNum">
                      <h6>Contact_Number:</h6>
                    </label>
                    <input
                      type="text"
                      id="phonenum"
                      className="form-control"
                      placeholder="PhoneNum"
                      required={true}
                      ref={mobileNumRef}
                    />
                    <br></br>
                    <label htmlFor="password">
                      <h6>Password:</h6>
                    </label>
                    <br></br>
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                      className="form-control"
                      required={true}
                      ref={passwordRef}
                    />
                    <br></br>
                    <label htmlFor="cpassword">
                      <h6>Confirm:</h6>
                    </label>
                    <br></br>
                    <input
                      type="password"
                      id="cpassword"
                      className="form-control"
                      placeholder="Confirm Password"
                      required={true}
                      ref={confirmPasswordRef}
                    />
                    <br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;``
                    <button className="btn btn-primary">Submit</button>
                    &nbsp;&nbsp;
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleBack}
                    >
                      Back
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
