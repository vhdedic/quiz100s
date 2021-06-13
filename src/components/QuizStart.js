import React from 'react';
import {
  Link
} from 'react-router-dom';

class QuizStart extends React.Component {
  render() {
    return (
      <div className="quiz">
        <p>Press Start.</p>
        <Link to="/quiz">
          <button>Start</button>
        </Link>
      </div>
    )
  }
}

export default QuizStart;