import React from 'react';
import CardsContainer from '../containers/cardscontainer'
import NavBar from '../components/navbar'

function HomePage(): JSX.Element {
  return (
    <div>
      <h1>rendering from home page</h1>
      <NavBar />
      <CardsContainer />
    </div>
  )
};

export default HomePage;