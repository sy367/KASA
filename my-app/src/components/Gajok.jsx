import React, { Component } from 'react';
import Study from './Study.js';
import Eat from './Eat.js';
import Chill from './Chill.js';
import Footer from './Footer.jsx';
import '../styles/gajok.css';
import Gajoks from '../images/gajoks.png';

export default class Gajok extends Component {
  render() {
    return (
      <div>
      <div id="gajok-container">
        <h1>Gajok</h1>
      </div>

      <div id="video-container">

        <div id="video-div">

          <iframe id="gajok-video"
                  src="https://www.youtube.com/embed/NEBh0icWiB8"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
          </iframe>

        </div>

      <div class="definition-container">

        <div id="definition">

        <h1 id="gajok-header">가족</h1>
        <p>[ga&#8226;jok]</p>
        <p><em>noun</em></p>
        <p>A family that is always there for you.</p>
        <p>Through the good times, and the bad.</p>
        <p>Your gajok will always love and support you.</p>
        </div>
        </div>

      </div>

      <div id="value-propositions">
        <div className="value-prop-card">
          <Eat />
        </div>

        <div className="value-prop-card">
          <Study />
        </div>

        <div className="value-prop-card">
          <Chill />
        </div>
        </div>

        <h1 id="welcome">This Year's Gajoks</h1>

        <div>
          <div class="gajok-row">
            <img id="gajok-image" alt="2018 Gajoks" src={Gajoks}/>
          </div>

          <div class="gajok-row">
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
