import React from 'react';
import questions from './json/questions.json';

class QuizBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: 100};
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
    return (
      <div>
        <p>Question?</p>
        <input type="button" className="button" value="A" />
        <input type="button" className="button" value="B" />
        <input type="button" className="button" value="C" />
        <input type="button" className="button" value="D" />
        <p>
            Remaining time: {this.state.time}s
          </p>
      </div>
    )
  }
}

export default QuizBody;