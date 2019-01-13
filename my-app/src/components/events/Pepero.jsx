import React, {Component} from 'react';
import '../../styles/events.css';
import EventImage from '../../images/pepero.jpg';

export default class Pepero extends Component {
  render () {
    return (
      <div className="event-container">
        <div className="event-info-container">
          <div className="event-image-container">
            <img className="event-image" alt="Pepero Day 2018" src={EventImage} />
          </div>

          <div className="event-description-container">
            <h1 className="event-header">Pepero Day</h1>
            <p className="event-description">
              Did you know that 11/11 is Pepero Day? On November 11th, many
              Koreans give each other Pepero to celebrate the day and share some
              sweet treats with friends and loved ones. In honor of this day,
              KASA holds a Pepero Delivery Service Fundraiser where you can send
              a special someone in your life a set of Pepero that will be
              hand-delivered to them by our E-Board members!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
