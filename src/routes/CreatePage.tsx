import React from 'react';
import { Box, TextField } from '@mui/material';
import NavBar from '../components/navbar';

function CreatePage(): JSX.Element {
  const handleSubmit = () => {
    //doin some stuff
  }
  return (
    <div>
      <h1>rendering from create page</h1>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <Box sx={{
            marginTop: 18,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
      <TextField id="company" label="Company" variant="outlined" required={true} margin="normal">Company</TextField>
      <TextField id="question" label="Question" variant="outlined" required={true} multiline={true} margin="normal">Question</TextField>
      <TextField id="answer" label="Answer" variant="outlined" multiline={true} margin="normal">Answer</TextField>
      </Box>
      </form>
    </div>
  )
};

export default CreatePage;