import React, {Component} from 'react';
import '../../styles/events.css';
import EventImage from '../../images/freshmen-event.jpg';

export default class Freshmen extends Component {
  render () {
    return (
      <div className="event-container">
        <div className="event-info-container">
          <div className="event-description-container">
            <h1 className="event-header">Freshmen Event</h1>
            <p className="event-description">
              Each year, KASA's Freshmen Representatives team up to create an
              event for their fellow KASA classmates. This year's Freshmen Event
              "KASA Karnival" took place in Jameson Sky Lounge on North Campus,
              offering a photobooth, cotton candy, carnival games, and more!
              While this event is focused on KASA's freshmen members, all KASA
              members are welcome :)
            </p>
          </div>

          <div className="event-image-container">
            <img className="event-image" alt="Freshmen Event 2018" src={EventImage} />
          </div>
        </div>
      </div>
    );
  }
}
