import Header from "../Header/header";
import Footer from "../Footer/footer";
import React from "react";
import image23 from "../../img/image23.png";
import lic from "../../img/lic.png";
import bob from "../../img/bob.png";
import tnid from "../../img/tnid.png";
import welfare from "../../img/welfare.png";
// import cultural from "../../img/cultural.png";
// import cultural_overlay from "../../img/cultural_overlay.png";


import {
  Typography,
} from "@mui/material";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-main">
      <Header />
      {/* Banner */}
      <div className="banner">
        <img src={image23} alt="banner" />
        <p className="banner-main">
          A common voice for Indians and Japanese which help them articulate
          their issues and concerns and facilitate their integration and
          meaningful participation in the IJFC.
        </p>
        <p className="banner-sub">
          The India Japan Friendship Center (IJFC) is a registered non-profit
          charitable trust organization formed by people of India and IJFC in
          order to strengthen relations between IJFC and India. One of the main
          objectives of IJFC is to preserve and enhance traditional and cultural
          values and the historical legacy that the people of the two countries
          share.
        </p>
      </div>
      <div className="about-approach">
        <Typography variant="h1">Our Approach</Typography>
        <Typography variant="h3">
          Bringing the spirit of togetherness that has strong cultural links
          between communities forunity, peace and love
        </Typography>
        <Typography variant="h4">
          In the past 3 years, IJFC have had various successful events, such as
          Holi, Christmas, Eid, Easter, Workshops, Seminars, Workshops,
          International Yoga Day, Walk-A-Thon, etc. IJFC also contributed to the
          Prime Minister National Relief & Rehab Fund, and from time to time
          organisedBlood Donation drives and donated food, fruits and biscuits
          to the blind societySt. Christopher’s Home, Gospel Dumb & Deaf Hostel
          and Dilkusha Home.
        </Typography>
      </div>
      {/* Member logos */}
      <div className="about-members">
        <Typography variant="h1">Members and Stakeholders</Typography>
        <div className="row">
          <div className="column">
            <img src={lic} alt="Snow" />
          </div>
          <div className="column">
            <img src={bob} alt="Forest" />
          </div>
          <div className="column">
            <img src={tnid} alt="Mountains" />
          </div>
          <div className="column">
            <img src={welfare} alt="Mountains" />
          </div>
        </div>
</div>

      <Footer/>
    </div>
  );
}

export default AboutUs;
