import Header from "../Header/header";
import Footer from "../Footer/footer";
import React from "react";
import gallery_banner from "../../img/gallery_banner.png";
import gallery1 from "../../img/gallery1.png";
import gallery2 from "../../img/gallery2.png";
import gallery3 from "../../img/gallery3.png";
import gallery4 from "../../img/gallery4.png";

import "./Gallery.css";

function Gallery() {
  return (
    <div>
      <Header />
      {/* Banner */}
      <div className="banner">
        <img src={gallery_banner} alt="banner" />
        <p className="gallery-banner-main">JOIN US WITH OUR BEST MOMENTS</p>
        <p className="gallery-banner-sub">Gallery</p>
      </div>
      <div className="about">
        <p className="gallery-heading">
          We have gathered many beautiful moments during our journey. The
          gallery that you must see in your lifetime
        </p>
      </div>
      {/* Gallery images */}
      <div className="cover">
        <div className="cover-image">
        <img src={gallery1} alt="gallery"></img>
        </div>
        <div className="cover-image">

        <img src={gallery2} alt="gallery2"></img>
        </div>
        <div className="cover-image">

        <img src={gallery3} alt="gallery3"></img>
        </div>
        <div className="cover-image">

        <img src={gallery4} alt="gallery4"></img>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default Gallery;
