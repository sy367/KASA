import React, { Component } from 'react';
import Headshot from '../../images/Seoin.jpg';
import '../../styles/eboard.css';

export default class Seoin extends Component {
  render() {
    return (
      <div className="profile-container">
        <div>
          <img className="headshot" alt="Seoin" src={Headshot} />
        </div>

        <div>
          <h1 className="eboard-name">Seoin Park '20</h1>
          <p className="profile-info"><strong>PROGRAMMING CHAIR</strong></p>
          <p className="profile-info">Hotel Administration</p>
          <p className="profile-info">Seoul, Korea</p>
        </div>
      </div>
    );
  }
}
