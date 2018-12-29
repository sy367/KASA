import React, { Component } from 'react';
import Headshot from '../../images/Eddie.jpg';
import '../../styles/eboard.css';

export default class Eddie extends Component {
  render() {
    return (
      <div className="profile-container">
        <div>
          <img className="headshot" alt="Eddie" src={Headshot} />
        </div>

        <div>
          <h1 className="eboard-name">Edward Baik '21</h1>
          <p><strong>PROGRAMMING CHAIR</strong></p>
          <p>CoE: Mechanical Engineering</p>
          <p>Guam</p>
        </div>
      </div>
    );
  }
}
