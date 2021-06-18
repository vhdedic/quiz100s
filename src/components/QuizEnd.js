import React from 'react';
import {
  Link
} from 'react-router-dom';

function QuizEnd(props) {
  return (
    <div>
      <Link to="/">
        <button>Try Again</button>
      </Link>
      <p>
        Remaining time: {props.finalTime}s
        </p>
      <p>
        Score: {props.finalScore}
      </p>
    </div>
  )
}

export default QuizEnd;