import React, { Component } from 'react';
import Headshot from '../../images/Lauren.jpg';
import '../../styles/eboard.css';

export default class Lauren extends Component {
  render() {
    return (
      <div className="profile-container">
        <div>
          <img className="headshot" alt="Lauren" src={Headshot} />
        </div>

        <div>
          <h1 className="eboard-name">Lauren Park '20</h1>
          <p className="profile-info"><strong>CO-PRESIDENT</strong></p>
          <p className="profile-info">AAP: Fine Arts</p>
          <p className="profile-info">Englewood Cliffs, NJ</p>
        </div>
      </div>
    );
  }
}
