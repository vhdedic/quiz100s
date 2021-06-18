import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import QuizStart from './components/QuizStart';
import QuizBody from './components/QuizBody';

function Quiz() {
  return (
    <Router basename="/quiz100s" >
      <div>
        <h1>Quiz 100 seconds</h1>
        <Switch>
          <Route path="/quiz">
            <QuizBody />
          </Route>
          <Route path="/">
            <QuizStart />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default Quiz;