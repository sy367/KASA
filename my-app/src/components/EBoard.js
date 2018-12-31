import React, { Component } from 'react';
import SJ from './eboard/SJ.jsx';
import Lauren from './eboard/Lauren.jsx';
import Alexis from './eboard/Alexis.jsx';
import Jewon from './eboard/Jewon.jsx';
import Youri from './eboard/Youri.jsx';
import Saehong from './eboard/Saehong.jsx';
import Eugene from './eboard/Eugene.jsx';
import Eileen from './eboard/Eileen.jsx';
import Annie from './eboard/Annie.jsx';
import Eddie from './eboard/Eddie.jsx';
import Seoin from './eboard/Seoin.jsx';
import Derek from './eboard/Derek.jsx';
import Andy from './eboard/Andy.jsx';
import Jennie from './eboard/Jennie.jsx';
import Michael from './eboard/Michael.jsx';
import '../styles/eboard.css';
import Banner from '../images/eboard.jpg';
import Footer from './Footer.jsx';

export default class EBoard extends Component {
  render() {
    return (
      <div>
      <div id="events-container">
        <img id="events-banner" alt="KASA x KSA" src={Banner} />
        <div id="center">E-Board</div>
      </div>

      <div id="eboard-container">
      <div className="eboard-row">
          <Lauren />
          <SJ />
          <Alexis />
      </div>

      <div className="eboard-row">
          <Jewon />
          <Youri />
          <Saehong />
      </div>

      <div className="eboard-row">
        <Eugene />
        <Eileen />
        <Annie />
      </div>

      <div className="eboard-row">
        <Eddie />
        <Derek />
        <Seoin />
      </div>

      <div className="eboard-row">
        <Andy />
        <Jennie />
        <Michael />
      </div>


      </div>
        <Footer />
      </div>

    );
  }
}
