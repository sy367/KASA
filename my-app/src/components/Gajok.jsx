import React, { Component } from 'react';
import Footer from './Footer.jsx';
import '../styles/gajok.css';

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

        <h1 id="gajok-header">가족</h1>
        <p>[ga&#8226;jok]</p>
        <p><em>noun</em></p>
        <p>A family that is always there for you.</p>
        <p>Through the good times, and the bad.</p>
        <p>Your gajok will always love and support you.</p>

        </div>

      </div>

        <h1 id="welcome">This Year's Gajoks</h1>

        <Footer />
      </div>
    );
  }
}
