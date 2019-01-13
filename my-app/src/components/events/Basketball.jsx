import React, {Component} from 'react';
import '../../styles/events.css';
import EventImage from '../../images/basketball.jpg';

export default class Basketball extends Component {
  render () {
    return (
      <div className="event-container">
        <div className="event-info-container">
          <div className="event-description-container">
            <h1 className="event-header">Basketball Tournament</h1>
            <p className="event-description">
              Do you got the skills to pay the bills? Come and test your ball
              dominance at the KASA x KSA Basketball Tournament held every year
              at Noyes Court! Entry fees are $5 per player, and you must bring
              a dry pair of sneakers and your Cornell ID to participate. The
              winning team will receive a very special prize!
            </p>
          </div>

          <div className="event-image-container">
            <img className="event-image" alt="Basketball Tournament 2018" src={EventImage} />
          </div>
        </div>
      </div>
    );
  }
}
