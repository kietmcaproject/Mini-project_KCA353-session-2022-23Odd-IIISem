import Header from './components/Header/header.js';
import Footer from './components/Footer/footer.js';
import './App.css';
import {Box,Grid, Typography, Container} from '@mui/material'

import React from 'react'
import homeBanner from './img/home-banner.png';
import mission1 from './img/mission-1.png';
import mission2 from './img/mission-2.png';
import missionLogo from './img/logo-mission.png';
import news1 from './img/news1.png';
import news2 from './img/news2.png';
import news3 from './img/news3.png';
import calander from './img/calander.png';
import gallery1 from './img/gallery1.png';
import gallery2 from './img/gallery2.png';
import gallery3 from './img/gallery3.png';
import gallery4 from './img/gallery4.png';
import bgAbout from './img/bg-about.png';

function App() {
  return (
    
    <div className="wrapper-main">
      <Header/>
      <section className="wrapper-banner">
        <img src={homeBanner} alt="home-banner"/>
        <p>Bringing the spirit of togetherness that has strong cultural links between communities for unity, peace and love</p>
      </section>
      <section className="mission m-60">
      <Box>
        <Container fixed>
          <Grid container spacing={2} className="m-60">
            <Grid item xs={6}>
              <Typography variant="h3">India-Japan Friendship Center (IJFC)</Typography>
              <p>India-Japan Friendship Center is a non-government, non-political and non-profit making voluntary organization primarily aims at identifying areas of convergence for mutual cooperation and brotherhood between the two countries in a constructive manner,contributing to the advancement of overall bilateral relations. It further reaffirms its determination to strengthen cooperation and coordination between India and Japan for comprehensive reforms at grass-root level</p>
            </Grid>
            <Grid item xs={6} className="img-mission">
              <img src={mission1} alt="mission-1"/>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6} className="img-mission">
              <img src={mission2} alt="mission-2"/>
            </Grid>
            <Grid item xs={6}>
            <Typography variant="h3"><img src={missionLogo} alt="mission-logo"/> Mission</Typography>
              <p>To increase visibility of Japan in India, and thereby enhance mutual understanding between India and Japan by showcasing art and culture and exchange knowledge and ideas.To deepen understanding on Japan amongst Indians.</p>
            </Grid>
          </Grid>
        </Container>
      </Box>
      </section>
      <section className="news m-60">
      <Box>
        <Container fixed>
          <Typography variant="h1">News</Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
            <img src={news1} alt="news-1"/>
            <Typography variant="h3">Japan has played an important role in india’s development journey:PM Modi on sidelines of Quad summit</Typography>
            <p>Commenting on Indo- Japan ties, the Prime Minister said “ India and Japan are natural partners. Japan has played an important role in India’s development journey.</p>
            </Grid>
            <Grid item xs={4}>
            <img src={news2} alt="news-2"/>
            <Typography variant="h3">An evening to celebrate India-Japan cultural ties</Typography>
            <p>The 37th edition of In- Nichi Bhunkasai an event showcasing the rich cultures of India and Japan, organized by the japaniese consulate in Kolkata, took place at a city auditorium on Sunday. The evening celebrated the 70th anniversary of the diplomatic relations between Japan and India.</p>
            </Grid>
            <Grid item xs={4}>
            <img src={news3} alt="news-3"/>
            <Typography variant="h3">India vs Japan 3rd place match Hockey Asia Cup 2022 live streaming: When and where to watch IND vs JPN live in India</Typography>
            <p>India have already played Japan twice in the tournament, winning once and losing once</p>
            </Grid>
          </Grid>
        </Container>
      </Box>
      </section>
      <section className="event m-60">
        <Box>
          <Container fixed>
            <Typography variant="h1">Events</Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <ul>
                  <li className='event-date'>
                    <p>27 <br/>May</p>
                    <img src={calander} alt="calander"/>
                  </li>
                  <li className='event-info'>
                    <Typography variant="h3">Recent Events</Typography>
                    <p>For example:  Some cultural events.</p>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={4}>
                <ul>
                  <li className='event-date'>
                    <p>5 <br/>June</p>
                    <img src={calander} alt="calander"/>
                  </li>
                  <li className='event-info'>
                    <Typography variant="h3">Upcoming Events</Typography>
                    <p>For example:  Some cultural events.</p>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={4}>
                <ul>
                  <li className='event-date'>
                    <p>13 <br/>Nov</p>
                    <img src={calander} alt="calander"/>
                  </li>
                  <li className='event-info'>
                    <Typography variant="h3">Past Events</Typography>
                    <p>India-Japan Dialogue-Coping with Disasters November 13, 2019</p>
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </section>
      <section className="gallery m-60">
        <Box>
          <Container fixed>
            <Typography variant="h1">Gallery</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <img src={gallery1} alt="gallery1"/>
              </Grid>
              <Grid item xs={6}>
                <img src={gallery2} alt="gallery2"/>
              </Grid>
              <Grid item xs={6}>
                <img src={gallery3} alt="gallery3"/>
              </Grid>
              <Grid item xs={6}>
                <img src={gallery4} alt="gallery4"/>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </section>
      <section className="aboutUs m-60">
        <Box>
          <Container fixed>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <Typography variant="h1">ABOUT US</Typography>
                <div className='inner-about'>
                <img src={bgAbout} alt="bg-about"/>
                <p>We aim to preserve andenhance traditional and cultural valuesand the historical legacy that the people of the two countries share</p>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
