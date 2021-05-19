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

  render() {
    const position = data[this.state.score]
    return (
      <div>
        <p>{position.question}</p>
        <input 
          type="button" 
          className="button" 
          value={position.answer_a}
        />
        <input
         type="button"
         className="button"
         value={position.answer_b} 
        />
        <input 
          type="button" 
          className="button" 
          value={position.answer_c} 
        />
        <input 
          type="button" 
          className="button" 
          value={position.answer_d} 
        />
        <p>
          Remaining time: {this.state.time}s
        </p>
        <p>
          Score: {this.state.score}
        </p>
      </div>
    )
  }
}

export default QuizBody;