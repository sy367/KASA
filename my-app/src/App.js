import React, { Component } from 'react';
import ScrollToTop from './components/ScrollToTop.jsx';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import EBoard from './components/EBoard.js';
import Gajok from './components/Gajok.jsx';
import FAQ from './components/FAQs.jsx';
import Events from './components/Events.jsx';
import Gallery from './components/Gallery.js';
import Contact from './components/Contact.jsx';

class App extends Component {
  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <ScrollToTop>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/executive-board" component={EBoard} />
            <Route exact path="/gajok" component={Gajok} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/faqs" component={FAQ} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
