import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ContactUs = () => {
  const [formStatus, setFormStatus] = React.useState("Send Message");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };

  return (
    <div>
      <nav className="topnav1">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/aboutUs">AboutUs</NavLink>
      </nav>

      <div className="vh-100" style={{ background: "#DCF2C4" }}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card">
              <div className="card-body p-5">
                <h1 className="mb-3" style={{ textAlign: "center" }}>
                  Contact Us
                </h1>
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "green",
                    fontSize: "1.2rem",
                  }}
                >
                  Got a Question ? We'd to love hear from you.Send us a message
                  and we'll respond as soon as possible
                </p>
                <form onSubmit={onSubmit}>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id="name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      rows="10"
                      id="message"
                      required
                    />
                  </div>
                  <Button type="submit">{formStatus}</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
