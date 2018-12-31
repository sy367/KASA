import React, {Component} from 'react';
import '../../styles/events.css';
import EventImage from '../../images/initiation.jpg';

export default class Initiation extends Component {
  render () {
    return (
      <div className="event-container">
        <div className="event-info-container">
          <div className="event-image-container">
            <img className="event-image" alt="Initiation 2018" src={EventImage} />
          </div>

          <div className="event-description-container">
            <h1 className="event-header">Initiation</h1>
            <p className="event-description">
            Initiation is KASA's First G-Body Meeting of the year where you can
            get your KASA Membership Card, learn about the events and activities
            KASA has planned for the year, and mingle with your fellow new members!
            Come out for a night of fun games, icebreakers, and a chance to get to
            know everyone in KASA. While attending this G-Body meeting is not
            required for KASA membership, we highly recommend that you come through
            since we will be announcing very important information for future
            KASA events!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
