import React, { Component } from 'react';
import Headshot from '../../images/SJ.jpg';
import '../../styles/eboard.css';

export default class SJ extends Component {
  render() {
    return (
      <div className="profile-container">
        <div>
          <img className="headshot" alt="SJ" src={Headshot} />
        </div>

        <div>
          <h1 className="eboard-name">SJ Yoon '20</h1>
          <p><strong>CO-PRESIDENT</strong></p>
          <p>CALS: Information Science</p>
          <p>Bayside, NY</p>
        </div>

      </div>

    );
  }
}
