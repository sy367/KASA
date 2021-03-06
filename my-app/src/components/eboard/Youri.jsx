import React, { Component } from 'react';
import Headshot from '../../images/Youri.jpg';
import '../../styles/eboard.css';

export default class Youri extends Component {
  render() {
    return (
      <div className="profile-container">
        <div>
          <img className="headshot" alt="Youri" src={Headshot} />
        </div>

        <div>
          <h1 className="eboard-name">Youri Jung '21</h1>
          <p className="profile-info"><strong>SECRETARY</strong></p>
          <p className="profile-info">HumEc: HBHS</p>
          <p className="profile-info">Philadelphia, PA</p>
        </div>
      </div>
    );
  }
}
