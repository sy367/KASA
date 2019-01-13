import React, {Component} from 'react';
import '../../styles/events.css';
import EventImage from '../../images/formal.jpg';

export default class Formal extends Component {
  render () {
    return (
      <div className="event-container">
        <div className="event-info-container">
          <div className="event-image-container">
            <img className="event-image" alt="KASA Formal 2018" src={EventImage} />
          </div>

          <div className="event-description-container">
            <h1 className="event-header">KASA Formal</h1>
            <p className="event-description">
              Held annually at Tokyo Hibachi, KASA Formal is an event where you
              can reconnect with old friends, take memorable photos with your
              squad, and send a final farewell to the semester with all of your
              KASA peers. All of this with a delicious Hibachi meal :) As Formal
              is the very last event of the year and arguably the best event KASA
              throws, make sure to get those tickets before they sell out!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
