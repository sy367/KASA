import React, { Component } from 'react';
import Headshot from '../../images/Jennie.jpg';
import '../../styles/eboard.css';

export default class Jennie extends Component {
  render() {
    return (
      <div className="profile-container">
        <div>
          <img className="headshot" alt="Jennie" src={Headshot} />
        </div>

        <div>
          <h1 className="eboard-name">Jennie Kim '19</h1>
          <p className="profile-info"><strong>SENIOR ADVISOR</strong></p>
          <p className="profile-info">HumEc: HBHS</p>
          <p className="profile-info">McLean, VA</p>
        </div>
      </div>
    );
  }
}
