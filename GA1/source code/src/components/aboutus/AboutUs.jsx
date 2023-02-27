import "./AboutUs.css";
import Cheff from "./cheff.png";

function AboutUs() {
  return (
    <div className="section">
      <div className="container">
        <div className="content-section">
          <div className="title">
            <h1>About Us</h1>
          </div>
          <div className="content">
            <h3>
              FOODHACK PROVIDE YOU THE SERVICE TO GET THE FOOD AT YOUR OWN
              PLACE.
              <br />
              <br />
              Get to know about store
            </h3>
            <p>
              FoodHack <br />
              KIET Group of Institutions
              <br />
              Ghaziabad
            </p>
            <div className="button">
              <a href="">Read More</a>
            </div>
          </div>
          <div className="social">
            <a href="">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="image-section">
          <img src={Cheff} />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
