import React, { Component } from 'react';
import Banner from '../images/banner.jpg';
import '../styles/events.css';

export default class Events extends Component {
  render() {
    return (
      <div id="events-container">
        <img id="events-banner" alt="KASA x KSA" src={Banner} />
        <div id="center">KASA Events</div>
      </div>
      
    );
  }
}
