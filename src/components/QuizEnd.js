import React from 'react';
import {
  Link
} from 'react-router-dom';

class QuizEnd extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <button>Try Again</button>
        </Link>
        <p>
          Remaining time: {this.props.finalTime}s
        </p>
        <p>
          Score: {this.props.finalScore}
        </p>
      </div>
    )
  }
}

export default QuizEnd;