import React, { useState, useEffect } from 'react';
import shuffle from 'shuffle-array';
import questions from './json/questions.json';
import QuizEnd from './QuizEnd';
import { Box, Button, Typography } from '@material-ui/core';

const data = shuffle(questions);

function QuizBody() {

  const [time, setTime] = useState(100);
  const [score, setScore] = useState(0);
  const [success, setSuccess] = useState(true);

  const timer = () => {
    if (time > 0 && success) {
      setTime(time - 1)
    }
  }

  useEffect(() => {
    const timeCounter = setInterval(() => timer(), 1000);
    return () => clearInterval(timeCounter);
  })

  const handleClick = (e) => {
    const answer = e.currentTarget.value;
    const correctAnswer = data[score].correct;

    if (answer === correctAnswer) {
      setScore(score + 1)
    } else {
      setSuccess(false)
    }
  }

  const position = data[score];
  const allAnswers = position.answers;
  const answerInput = allAnswers.map((oneAnswer, index) => (
    <Box mb={3}>
      <Button
        onClick={handleClick}
        key={index}
        value={oneAnswer}
        color={'primary'}
        variant={'contained'}
        size={'large'}
        children={oneAnswer}
        fullWidth
      />
    </Box>
  ))

  if (time > 0 && success) {
    return (
      <Box>
        <Typography variant={'h5'} paragraph>{position.question}</Typography>
        <Box>{answerInput}</Box>
        <Typography variant={'h5'} paragraph>
          Remaining time: {time}s
        </Typography>
        <Typography variant={'h5'} paragraph>
          Score: {score}
        </Typography>
      </Box>
    )
  } else if (time === 0) {
    shuffle(questions);

    return (
      <Box>
        <Typography variant={'h5'} paragraph>Time expired.</Typography>
        <QuizEnd finalScore={score} finalTime={time} />
      </Box>
    )
  } else if (!success) {
    shuffle(questions);

    return (
      <Box>
        <Typography variant={'h5'} paragraph>
          Wrong. Correct answer is "{position.correct}".
        </Typography>
        <QuizEnd finalScore={score} finalTime={time} />
      </Box>
    )
  }
}

export default QuizBody;
