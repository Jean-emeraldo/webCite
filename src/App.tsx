import React from 'react';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Companies from './Components/Companies/Companies';
import Residence from './Components/Residence/Residence';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Companies />
      <Residence />

    </div>
  );
};

export default App;
