import React, { Component } from 'react';
import '../styles/faqs.css';
import Q1 from './faqs/questions/Q1.js';
import Q2 from './faqs/questions/Q2.js';
import Footer from './Footer.jsx';


export default class FAQs extends Component {
  render() {
    return (
      <div>
      <div id="gajok-container">
        <h1>FAQs</h1>
      </div>

      <div id="faqs-container">
        <Q1 />
        <Q2 />
      </div>

      <Footer />
      </div>

    );
  }
}
