import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer"
import eventimg from "../../img/event.png";
import event2 from "../../img/events2.png";

import "./event.css";

function Event() {
  return (
    <div className="event-main">
      <Header />
      {/* Event banner */}
      <div className="event-banner">
        <img src={eventimg} alt="event"></img>
        <p className="banner-main">JOIN US WITH OUR BEST MEMORIES</p>
      </div>
      {/* Past Events */}
      <h3 className="events-heading">Past Events</h3>
      <div>
        <p className="past-events-text">
          Farwell Reception in honour of H.E. Mr Kenji Hiramastu,Ambassador of
          Japan to India October 14, 2019 , New Delhi
        </p>
      </div>

      <img src={event2} className="event-img2" alt="event"></img>
      <div className="past-events-text">
        Japan Film Festival <br></br>
        September 27 - October 6, 2019, Delhi NCR
      </div>
      <div className="past-events-text">
        An Evening with Japanese Sake <br></br>
        September 4, 2019, Ambassador’s Residence, Embassy of Japan 50-G,
        Shantipath, Chanakyapuri, New Delhi
      </div>
      <div className="past-events-text">
        Great Indian Travel Bazaar<br></br>
        April 28-30 , 2019, Jaipur Rajasthan
      </div>
      {/* Recent Events */}
      <h3 className="events-heading">Recent Events</h3>
      <div className="past-events-text">
        An Evening with Japanese Sake ,September 4, 2022, Ambassador’s
        Residence, Embassy of Japan 50-G, Shantipath,Chanakyapuri, New Delhi
      </div>
      {/* Forthcoming events */}
      <h3 className="events-heading">Forthcoming Events</h3>
      <div className="past-events-text">
        Japanese Language Group Reading ("Gundoku") Contest Japan Foundation TBD
      </div>
      <Footer/>
    </div>
  );
}

export default Event;
