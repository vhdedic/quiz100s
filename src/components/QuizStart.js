import React from 'react';
import {
  Link
} from 'react-router-dom';
import { Box, Button, Typography } from '@material-ui/core';

function QuizStart() {
  return (
    <Box>
      <Typography variant={'h5'} paragraph>Press Start.</Typography>
      <Link to="/quiz">
        <Button 
          color={'primary'} 
          variant={'contained'} 
          size={'large'}
          children={'Start'} 
          fullWidth
        />
      </Link>
    </Box>
  )
}

export default QuizStart;