import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Logo from '../images/logo2.png';

import '../styles/navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <div id="nav-container">
        <div id="nav-links">
        <div className="nav-item">
          <Link activeClassName="active" to="/executive-board">E-BOARD</Link>
        </div>

        <div className="nav-item">
          <Link to="/gajok">GAJOK</Link>
        </div>

        <div className="nav-item">
          <Link to="/events">EVENTS</Link>
        </div>

        <div className="nav-logo">
          <Link to="/"><img id="logo" alt="KASA Logo" src={Logo} /></Link>
        </div>

        <div className="nav-item">
          <Link to="/alumni">ALUMNI</Link>
        </div>

        <div className="nav-item">
          <Link to="/faqs">FAQS</Link>
        </div>

        <div className="nav-item">
          <Link to="/contact">CONTACT</Link>
        </div>
        </div>
      </div>
    );
  }
}
