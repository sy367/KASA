import React, {Component} from 'react';
import '../../styles/events.css';
import EventImage from '../../images/korea-night.jpg';

export default class KoreaNight extends Component {
  render () {
    return (
      <div className="event-container">
        <div className="event-info-container">
          <div className="event-description-container">
            <h1 className="event-header">Korea Night</h1>
            <p className="event-description">
              Every year, KASA and KSA co-host Korean Culture Night at Willard
              Straight Hall for a night of Korean food, culture, and traditional
              games, open to all students at Cornell. Featuring a variety
              of productions from hip-hop dance crews to traditional Korean
              performance groups, Korea Night is the one event where the entire
              Cornell community can come and gather to get a taste of Korean
              culture. As this is our biggest event of the year, make sure you
              don't miss out!
            </p>
          </div>

          <div className="event-image-container">
            <img className="event-image" alt="Korea Night 2018" src={EventImage} />
          </div>
        </div>
      </div>
    );
  }
}
