import React from 'react';
import shuffle from 'shuffle-array';
import questions from './json/questions.json';
import QuizEnd from './QuizEnd';

const data = shuffle(questions);

class QuizBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 100,
      score: 0,
      success: true
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
    if (this.state.time > 0 && this.state.success) {
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
        score: this.state.score + 1
      });
    } else {
      this.setState({
        success: false
      });
    }
  }

  render() {
    const position = data[this.state.score];
    const allAnswers = position.answers;
    const answerInput = allAnswers.map((oneAnswer, index) => (
      <button
        onClick={this.handleClick}
        key={index}
        value={oneAnswer}
      >
        {oneAnswer}
      </button> 
    ))

    if (this.state.time > 0 && this.state.success) {
      return (
        <div className="quiz">
          <p>{position.question}</p>
          <div>{answerInput}</div>
          <p>
            Remaining time: {this.state.time}s
          </p>
          <p>
            Score: {this.state.score}
          </p>
        </div>
      )
    } else if (this.state.time === 0) {
      shuffle(questions);
      
      return (
        <div className="quiz">
          <p>Time expired.</p>
          <QuizEnd finalScore={this.state.score} finalTime={this.state.time} />
        </div>
      )
    } else if (!this.state.success) {
      shuffle(questions);

      return (
        <div className="quiz">
          <p>Wrong Answer.</p>
          <QuizEnd finalScore={this.state.score} finalTime={this.state.time} />
        </div>
      )
    }
  }
}

export default QuizBody;