import React, { Component } from 'react';
import Headshot from '../../images/Michael.jpg';
import '../../styles/eboard.css';

export default class Michael extends Component {
  render() {
    return (
      <div className="profile-container">
        <div>
          <img className="headshot" alt="Michael" src={Headshot} />
        </div>

        <div>
          <h1 className="eboard-name">Michael Jeong '19</h1>
          <p><strong>SENIOR ADVISOR</strong></p>
          <p>HumEc: HBHS</p>
          <p>Seoul, Korea</p>
        </div>
      </div>
    );
  }
}
