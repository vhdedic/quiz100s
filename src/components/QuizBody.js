import React from 'react';
import shuffle from 'shuffle-array';
import questions from './json/questions.json';

const data = shuffle(questions);

class QuizBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 100,
      score: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.timeCounter = setInterval(() => this.timer(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeCounter);
  }

  timer() {
    if (this.state.time > 0) {
      this.setState({
        time:this.state.time - 1
      });
    } 
  }

  handleClick(e) {
    const answer = e.target.value;
    const correctAnswer = data[this.state.score].correct;

    if (answer === correctAnswer) {
      this.setState({
        score:this.state.score+1
      });
    }
  }

  render() {
    const position = data[this.state.score];
    if (this.state.time > 0) {
      return (
        <div>
          <p>{position.question}</p>
          <input 
            type="button" 
            className="button" 
            value={position.answer_a}
            onClick={this.handleClick}
          />
          <input
           type="button"
           className="button"
           value={position.answer_b}
           onClick={this.handleClick}
          />
          <input 
            type="button" 
            className="button" 
            value={position.answer_c}
            onClick={this.handleClick}
          />
          <input 
            type="button" 
            className="button" 
            value={position.answer_d}
            onClick={this.handleClick}
          />
          <p>
            Remaining time: {this.state.time}s
          </p>
          <p>
            Score: {this.state.score}
          </p>
        </div>
      )
    } else {
      return (
        <p>End</p>
      )
    }
  }
}

export default QuizBody;