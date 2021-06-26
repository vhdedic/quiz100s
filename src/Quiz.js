import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import QuizStart from './components/QuizStart';
import QuizBody from './components/QuizBody';
import { Box, Container, Typography } from '@material-ui/core';

function Quiz() {
  return (
    <Router basename="/quiz100s">
      <Container>
        <Box mt={4}>
          <Typography variant={'h3'} align={'center'} paragraph>
            Quiz 100 seconds
          </Typography>
          <Switch>
            <Route path="/quiz">
              <QuizBody />
            </Route>
            <Route path="/">
              <QuizStart />
            </Route>
          </Switch>
        </Box>
      </Container>
    </Router>
  )
}

export default Quiz;