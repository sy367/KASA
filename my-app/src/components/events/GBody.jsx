import React, {Component} from 'react';
import '../../styles/events.css';
import EventImage from '../../images/gbody.jpg';

export default class GBody extends Component {
  render () {
    return (
      <div className="event-container">
        <div className="event-info-container">
          <div className="event-description-container">
            <h1 className="event-header">Gajok G-Body</h1>
            <p className="event-description">
              The Gajok G-Body Meeting is the second and final G-Body meeting of the
              semester where the Bigs give presentations on what their Gajoks have
              planned for the year, and Littles select Gajoks to join based on these
              presentations. If you would like to join a Gajok, you must attend
              this G-Body meeting!
            </p>
          </div>

          <div className="event-image-container">
            <img className="event-image" alt="Gajok G-Body 2018" src={EventImage} />
          </div>
        </div>
      </div>
    );
  }
}
