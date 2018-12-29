import React, { Component } from 'react';
import Headshot from '../../images/Andy.jpg';
import '../../styles/eboard.css';

export default class Andy extends Component {
  render() {
    return (
      <div className="profile-container">
        <div>
          <img className="headshot" alt="Andy" src={Headshot} />
        </div>

        <div>
          <h1 className="eboard-name">Andy Lee '19</h1>
          <p><strong>SENIOR ADVISOR</strong></p>
          <p>A&S: Biology</p>
          <p>Randolph, NJ</p>
        </div>
      </div>
    );
  }
}
