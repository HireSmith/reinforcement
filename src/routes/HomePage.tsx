import React, { Fragment, useState, useEffect } from 'react';
import CardsContainer from '../containers/cardscontainer'
import NavBar from '../components/navbar'


function HomePage(): JSX.Element {
  const [questionData, setQuestionData] = useState([]);
  //get request here
  const getAllQuestions = () => {
    fetch('/api/question', {
      method: 'GET'
    })
    .then(data => data.json())
    .then(questionArr => {
      setQuestionData(questionArr);
    })
    .catch(err => console.log('Error fetching question data'))
  }

  useEffect(() => {
    getAllQuestions();
  },[])
  
  return (
     <div>
    {questionData.length > 0 && (
      <Fragment>
        <NavBar />
        <CardsContainer questionData={questionData} />
        </Fragment>
    )}
    </div>
    
  )
};

export default HomePage;