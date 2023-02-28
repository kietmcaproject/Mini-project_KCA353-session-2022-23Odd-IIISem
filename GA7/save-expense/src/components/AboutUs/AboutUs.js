import Carousel from "react-bootstrap/Carousel";
import image0 from "../Images/image0.jpg";
import image1 from "../Images/image1.png";
import image2 from "../Images/image2.png";
import image3 from "../Images/image3.png";
import image4 from "../Images/image4.png";
import { NavLink } from "react-router-dom";

import "./AboutUs.css";

function AboutUs() {
  return (
    <div>
      <nav className="topnav1">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/contactUs">ContactUs</NavLink>
      </nav>

      <div className="text-center" style={{ backgroundColor: "#F8F1BA" }}>
        <Carousel fade>
          <Carousel.Item>
            <img
              className="mx-auto d-block"
              width="800"
              height="800"
              src={image0}
              style={{
                marginTop: "70px",
              }}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="image-fluid"
              width="800"
              height="800"
              src={image1}
              style={{
                marginTop: "70px",
              }}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="mx-auto d-block"
              width="800"
              height="800"
              src={image2}
              style={{
                marginTop: "70px",
              }}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="mx-auto d-block"
              width="800"
              height="800"
              src={image3}
              style={{
                marginTop: "70px",
              }}
              alt="Fourth slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="mx-auto d-block"
              width="800"
              height="800"
              style={{
                marginTop: "70px",
              }}
              src={image4}
              alt="Fifth slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default AboutUs;
