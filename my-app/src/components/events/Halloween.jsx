import React, {Component} from 'react';
import '../../styles/events.css';
import EventImage from '../../images/halloween.jpg';

export default class Halloween extends Component {
  render () {
    return (
      <div className="event-container">
        <div className="event-info-container">
          <div className="event-image-container">
            <img className="event-image" alt="Initiation 2018" src={EventImage} />
          </div>

          <div className="event-description-container">
            <h1 className="event-header">Halloween</h1>
            <p className="event-description">
              KASA Halloween is our biggest Gajok-oriented event of the fall
              semester where Gajoks dress up in ~spooky~ costumes and come
              together for a night of fun and mingling with all of the Gajoks.
              The Gajok that receives the most votes for best costume will win
              a very special prize :) Co-hosted with Pi Delta Psi Fraternity,
              come out to flex your Gajok aesthetic!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
