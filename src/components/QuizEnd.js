import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@material-ui/core';

function QuizEnd(props) {
  return (
    <Box>
      <Link to="/">
        <Button 
          color={'primary'} 
          variant={'contained'} 
          size={'large'} 
          children={'Try Again'}
          fullWidth
        />
      </Link>
      <Box mt={3}>
        <Typography variant={'h5'} paragraph>
          Remaining time: {props.finalTime}s
        </Typography>
        <Typography variant={'h5'} paragraph>
          Score: {props.finalScore}
        </Typography>
      </Box>
    </Box>
  )
}

export default QuizEnd;