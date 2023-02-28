import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signUp");
  };
  async function submitHandler(event) {
    event.preventDefault();
    const user = {
      emailId: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const response = await fetch("http://localhost:8080/user/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      navigate("/transactions");
    } else {
      setError(true);
    }
  }

  return (
    <div>
      <nav className="topnav1">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/aboutUs">AboutUs</NavLink>
        <NavLink to="/contactUs">ContactUs</NavLink>
      </nav>
      <div className="vh-100 bg-image   gradient-custom-3">
        <div className="mask d-flex align-items-center h-100 gradient-custom-4">
          <div className="container h-90 ">
            <div className="row d-flex justify-content-center align-items-center h-80">
              <div className="col-12 col-md-14 col-lg-7 col-xl-6">
                <div className="card bg-light  ">
                  <div className="card-body p-5 ">
                    <h2 className="text-uppercase text-center mb-5">
                      Login to Bachat <i className="fa fa-rupee-sign"> </i>💰💰
                    </h2>
                    <div
                      className="error"
                      style={{
                        display: error ? "" : "none",
                        textAlign: "center",
                        color: "red",
                        fontSize: "18px",
                        fontStyle: "italic",
                        fontWeight: "bold",
                      }}
                    >
                      <p>
                        Invalid Email Or Password...<br></br>
                      </p>
                    </div>
                    <form onSubmit={submitHandler}>
                      <label htmlFor="email">
                        <h6>E-Mail / UserName</h6>
                      </label>
                      <br></br>
                      <input
                        type="text"
                        id="email"
                        name="username"
                        className="form-control"
                        placeholder="E-mail"
                        required={true}
                        ref={emailRef}
                      />
                      <br></br>
                      <label htmlFor="password">
                        <h6>Password:</h6>
                      </label>
                      <br></br>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        required={true}
                        ref={passwordRef}
                      />
                      <br></br>
                      <br></br>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                      &nbsp;&nbsp;
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleSignUp}
                      >
                        SignUp
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
