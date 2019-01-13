import React, { Component } from 'react';
import '../../../styles/faqs.css';
import A1 from '../answers/A1.js';

export default class Q1 extends Component {
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
        <h2 onClick={this.handleClick} class="faq" id="q1">
          {this.state.caret ? <span>&and;</span> : <span>&or;</span>} How do I join KASA?
        </h2>

        {this.state.showAnswer ? <A1 /> : null}
      </div>
    );
  }
}
