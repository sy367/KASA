import React, {Component} from 'react';
import Studying from '../images/study.jpg';
import '../styles/valueprop.css';

export default class Study extends Component {
  render() {
    return (
      <div className="value-prop-container">
        <div className="prop-image-container">
          <img className="prop-image" alt="Studying" src={Studying} />
          <div className="prop-header">Study</div>
        </div>

        <div className="value-prop">
          Here at KASA, we work hard and play hard. We have members from
          all colleges, so you can be sure to find people who share your interests.
          Make cramming for prelims a little less painful by studying with your Gajok!
        </div>
      </div>
    );
  }
}
