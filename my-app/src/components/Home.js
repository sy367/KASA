import React, { Component } from 'react';
import Footer from './Footer.jsx';
import Banner from '../images/koreanight.jpg';
import '../styles/banner.css';
import '../styles/home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
      <div className="banner-container">
        <img className="banner-image" alt="KASA x KSA" src={Banner} />
        <div className="banner-header">
          Cornell KASA
        </div>
      </div>

      <div id="body-container">
      <h1 id="welcome">Welcome to KASA.</h1>

      <p id="home-text">
        The Korean American Students Association (KASA) of Cornell University is
        a union amongst students of all backgrounds that serves to promote
        awareness of Korean American identity and culture within the Cornell
        community. We host a variety of social, political, and cultural events
        throughout the year that are open to all students. Through our campus-wide
        events and the Gajok system, we hope to create an environment where students
        of all races, ethnicities, and backgrounds can share and learn about
        Korean culture.
      </p>
      </div>

      <Footer />

      </div>
    );
  }
}
