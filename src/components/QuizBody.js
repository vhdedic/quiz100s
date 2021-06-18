import React, { useState, useEffect } from 'react';
import shuffle from 'shuffle-array';
import questions from './json/questions.json';
import QuizEnd from './QuizEnd';

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
    const answer = e.target.value;
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
    <button
      onClick={handleClick}
      key={index}
      value={oneAnswer}
    >
      {oneAnswer}
    </button>
  ))

  if (time > 0 && success) {
    return (
      <div className="quiz">
        <p>{position.question}</p>
        <div>{answerInput}</div>
        <p>
          Remaining time: {time}s
          </p>
        <p>
          Score: {score}
        </p>
      </div>
    )
  } else if (time === 0) {
    shuffle(questions);

    return (
      <div className="quiz">
        <p>Time expired.</p>
        <QuizEnd finalScore={score} finalTime={time} />
      </div>
    )
  } else if (!success) {
    shuffle(questions);

    return (
      <div className="quiz">
        <p>Wrong. Correct answer is "{position.correct}".</p>
        <QuizEnd finalScore={score} finalTime={time} />
      </div>
    )
  }
}

export default QuizBody;