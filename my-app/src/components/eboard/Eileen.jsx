import React, { Component } from 'react';
import Headshot from '../../images/Eileen.jpg';
import '../../styles/eboard.css';

export default class Eileen extends Component {
  render() {
    return (
      <div className="profile-container">
        <div>
          <img className="headshot" alt="Eileen" src={Headshot} />
        </div>

        <div>
          <h1 className="eboard-name">Eileen Cheong '21</h1>
          <p><strong>PUBLICITY CHAIR</strong></p>
          <p>CoE: Chemical Engineering</p>
          <p>Seoul, Korea</p>
        </div>
      </div>
    );
  }
}
