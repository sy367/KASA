import React, { Component } from 'react';
import Headshot from '../../images/Saehong.jpg';
import '../../styles/eboard.css';

export default class Saehong extends Component {
  render() {
    return (
      <div className="profile-container">
        <div>
          <img className="headshot" alt="Saehong" src={Headshot} />
        </div>

        <div>
          <h1 className="eboard-name">Saehong Kim '21</h1>
          <p className="profile-info"><strong>VISUAL ARTS COORDINATOR</strong></p>
          <p className="profile-info">Industrial Labor Relations</p>
          <p className="profile-info">New Delhi, India</p>
        </div>
      </div>
    );
  }
}
