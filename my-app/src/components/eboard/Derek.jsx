import React, { Component } from 'react';
import Headshot from '../../images/Derek.jpg';
import '../../styles/eboard.css';

export default class Derek extends Component {
  render() {
    return (
      <div className="profile-container">
        <div>
          <img className="headshot" alt="Derek" src={Headshot} />
        </div>

        <div>
          <h1 className="eboard-name">Derek Lee '21</h1>
          <p className="profile-info"><strong>PROGRAMMING CHAIR</strong></p>
          <p className="profile-info">HumEc: HBHS</p>
          <p className="profile-info">Long Island, NY</p>
        </div>
      </div>
    );
  }
}
