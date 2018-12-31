import React, { Component } from 'react';
import Headshot from '../../images/Alexis.jpg';
import '../../styles/eboard.css';

export default class Alexis extends Component {
  render() {
    return (
      <div className="profile-container">
        <div>
          <img className="headshot" alt="Alexis" src={Headshot} />
        </div>

        <div>
          <h1 className="eboard-name">Alexis Kim '21</h1>
          <p className="profile-info"><strong>VICE PRESIDENT</strong></p>
          <p className="profile-info">A&S: Biology and Society</p>
          <p className="profile-info">Aliso Viejo, CA</p>
        </div>
      </div>
    );
  }
}
