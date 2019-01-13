import React, { Component } from 'react';
import '../../../styles/faqs.css';
import A2 from '../answers/A2.js';

export default class Q2 extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      showAnswer: false,
      caret: false
    }
  }

  handleClick() {
    this.setState({
      showAnswer: !this.state.showAnswer,
      caret: !this.state.caret
    })
  }

  render() {
    return (
      <div class="faq-container">
        <h2 onClick={this.handleClick} class="faq">
          {this.state.caret ? <span>&and;</span> : <span>&or;</span>} Can I join KASA even if I'm not Korean?
        </h2>

        {this.state.showAnswer ? <A2 /> : null}
      </div>
    );
  }
}
