import React, { Component } from 'react';
import Banner from '../images/koreanight.jpg';
import '../styles/home.css';

export default class Home extends Component {
  render() {
    return (
      <div id="container">
        <img id="banner" alt="KASA x KSA" src={Banner} />
        <div id="center">
          <p>Welcome to KASA</p>
        </div>
      </div>
    );
  }
}
