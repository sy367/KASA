import React, {Component} from 'react';
import Eating from '../images/eat.jpg';
import '../styles/valueprop.css';

export default class Eat extends Component {
  render() {
    return (
      <div className="value-prop-container">
        <div className="prop-image-container">
          <img className="prop-image" alt="Eating" src={Eating} />
          <div className="prop-header">Eat</div>
        </div>

        <div className="value-prop">
          Interested in discovering your new favorite food spot around town?
          Explore all the great restaurants that Cornell and Ithaca have to
          offer with your gajok!
        </div>
      </div>
    );
  }
}
