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
          <p className="profile-info"><strong>SENIOR ADVISOR</strong></p>
          <p className="profile-info">A&S: Biology</p>
          <p className="profile-info">Randolph, NJ</p>
        </div>
      </div>
    );
  }
}
