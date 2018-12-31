import React, { Component } from 'react';
import Headshot from '../../images/Jewon.jpg';
import '../../styles/eboard.css';

export default class Jewon extends Component {
  render() {
    return (
      <div className="profile-container">
        <div>
          <img className="headshot" alt="Jewon" src={Headshot} />
        </div>

        <div>
          <h1 className="eboard-name">Jewon Sohn '21</h1>
          <p className="profile-info"><strong>TREASURER</strong></p>
          <p className="profile-info">A&S: Information Science</p>
          <p className="profile-info">Seattle, WA</p>
        </div>
      </div>
    );
  }
}
