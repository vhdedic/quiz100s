import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import QuizStart from './components/QuizStart';

class Quiz extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<h1>Quiz 100 seconds</h1>
					<Switch>
						<Route path="/">
							<QuizStart />							
						</Route>
					</Switch>
				</div>
			</Router>
		)
	}
}

export default Quiz;