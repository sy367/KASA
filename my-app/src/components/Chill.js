import React, {Component} from 'react';
import Chilling from '../images/chill.jpg';
import '../styles/valueprop.css';

export default class Chill extends Component {
  render() {
    return (
      <div className="value-prop-container">
        <div className="prop-image-container">
          <img className="prop-image" alt="Chilling" src={Chilling} />
          <div className="prop-header">Chill</div>
        </div>

        <div className="value-prop">
          Wind back and take a break from all the stress of problem sets and
          prelims by hanging out with your favorite people. You can go to NRB,
          have a movie night, cook food together... the possibilities are endless!
        </div>
      </div>
    );
  }
}
