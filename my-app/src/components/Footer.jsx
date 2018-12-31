import React, {Component} from 'react';
import '../styles/footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div id="footer-container">
      <div id="footer-links">
        <div className="footer-item">
          <a href="https://www.facebook.com/CornellKASA/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-square"></i>
          </a>
        </div>
        <div className="footer-item">
          <a href="https://www.instagram.com/cornellkasa/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="footer-item">
          <a href="mailto:sy367@cornell.edu">
            <i className="far fa-envelope"></i>
          </a>
        </div>
      </div>

      <div id="copyright">
        © 2018 Seokjoo Yoon | Cornell KASA
      </div>
      </div>
    );
  }

}
