import React from 'react';
import { Box, TextField } from '@mui/material';
import NavBar from '../components/navbar';
import { useState } from 'react';

function CreatePage(): JSX.Element {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/question/', {
      method: 'POST',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...inputs, user_id: 1})
    })
  }
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  return (
    <div>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <Box sx={{
            marginTop: 18,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
      <TextField onChange={handleChange} name="company" id="company" label="Company" variant="outlined" required={true} margin="normal">Company</TextField>
      <TextField onChange={handleChange} name="question" id="question" label="Question" variant="outlined" required={true} multiline={true} margin="normal">Question</TextField>
      <TextField onChange={handleChange} name="answer" id="answer" label="Answer" variant="outlined" multiline={true} margin="normal">Answer</TextField>
      <select onChange={handleChange} name="question_type" id="type" style={{width: "205px", height: "50px", margin: "2px"}}>
        <option value="Non-Technical">Non-Technical</option>
        <option value="Algorithm">Algorithm</option>
        <option value="System Design">System Design</option>
        <option value="Other Technical">Other Technical</option>
        <option value="Other">Other</option>  
      </select>
      <button id="submit" type="submit" style={{width: "205px", height: "25px", margin: "10px"}}>Submit</button>
      </Box>
      </form>
    </div>
  )
};

export default CreatePage;