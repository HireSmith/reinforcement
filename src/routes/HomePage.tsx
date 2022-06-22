import React from 'react';
import CardsContainer from '../containers/cardscontainer'
import NavBar from '../components/navbar'

function HomePage(): JSX.Element {
  return (
    <div>
      <NavBar />
      <CardsContainer />
    </div>
  )
};

export default HomePage;