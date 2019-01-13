import React, {Component} from 'react';
import '../../styles/events.css';
import EventImage from '../../images/league.jpg';

export default class League extends Component {
  render () {
    return (
      <div className="event-container">
        <div className="event-info-container">
          <div className="event-image-container">
            <img className="event-image" alt="League Tournament 2018" src={EventImage} />
          </div>

          <div className="event-description-container">
            <h1 className="event-header">League Tournament</h1>
            <p className="event-description">
              Tired of spending hours grinding in solo queue because randoms
              keep feeding? Play on a team with your friends at the annual KASA
              League of Legends Tournament instead! Registration fee is $5 per
              person and you may only register as a full 5-person team. As this
              tournament is officially sponsored by Riot Games, the top three
              teams will receive RP prizes and exclusive Riot items!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
