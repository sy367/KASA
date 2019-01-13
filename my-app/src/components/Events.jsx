import React, { Component } from 'react';
import Banner from '../images/banner.jpg';
import Initiation from './events/Initiation.jsx';
import GBody from './events/GBody.jsx';
import Halloween from './events/Halloween.jsx';
import Freshmen from './events/Freshmen.jsx';
import Pepero from './events/Pepero.jsx';
import Basketball from './events/Basketball.jsx';
import League from './events/League.jsx';
import KoreaNight from './events/KoreaNight.jsx';
import Formal from './events/Formal.jsx';
import Footer from './Footer.jsx';
import '../styles/banner.css';
import '../styles/events.css';

export default class Events extends Component {
  render() {
    return (
      <div>
      <div className="banner-container">
        <img className="banner-image" alt="KASA x KSA" src={Banner} />
        <div className="banner-header">KASA Events</div>


      </div>
      <Initiation />
      <GBody />
      <Halloween />
      <Freshmen />
      <Pepero />

      <Basketball />
      <League />
      <KoreaNight />
      <Formal />

      <Footer />
      </div>

    );
  }
}
