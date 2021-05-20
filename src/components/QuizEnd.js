import React from 'react';
import {
  Link
} from 'react-router-dom';

class QuizEnd extends React.Component {
  render() {
    if (this.props.finalTime === 0) {
      return (
        <div>
          <p>Time expired.</p>
          <Link to="/" style={{textDecoration: 'none'}}>
            <input 
              type="button"
              className="button" 
              value="Try Again"
            />
          </Link>
          <p>
            Remaining time: {this.props.finalTime}s
          </p>
          <p>
            Score: {this.props.finalScore}
          </p>
        </div>
      )
    } else {
      return (
        <div>
          <p>Wrong Answer.</p>
          <Link to="/" style={{textDecoration: 'none'}}>
          <input 
              type="button"
              className="button" 
              value="Try Again"
            />
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
}

export default QuizEnd;