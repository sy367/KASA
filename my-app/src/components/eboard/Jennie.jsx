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
          <p><strong>SENIOR ADVISOR</strong></p>
          <p>HumEc: HBHS</p>
          <p>McLean, VA</p>
        </div>
      </div>
    );
  }
}
