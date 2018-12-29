import React, { Component } from 'react';
import Headshot from '../../images/Eugene.jpg';
import '../../styles/eboard.css';

export default class Eugene extends Component {
  render() {
    return (
      <div className="profile-container">
        <div>
          <img className="headshot" alt="Eugene" src={Headshot} />
        </div>

        <div>
          <h1 className="eboard-name">Eugene Park '19</h1>
          <p><strong>PUBLICITY CHAIR</strong></p>
          <p>A&S: Government</p>
          <p>Seoul, Korea</p>
        </div>
      </div>
    );
  }
}
