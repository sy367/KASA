import React, { Component } from 'react';
import Headshot from '../../images/Annie.jpg';
import '../../styles/eboard.css';

export default class Annie extends Component {
  render() {
    return (
      <div className="profile-container">
        <div>
          <img className="headshot" alt="Annie" src={Headshot} />
        </div>

        <div>
          <h1 className="eboard-name">Annie Oh '20</h1>
          <p className="profile-info"><strong>PUBLICITY CHAIR</strong></p>
          <p className="profile-info">CALS: Nutritional Science</p>
          <p className="profile-info">Honolulu, HI</p>
        </div>
      </div>
    );
  }
}
