"use client"
import React, { useState } from 'react';
import Topbar from '../components/Topbar';
import Hero from '../components/payback/hero';
import Steps from '../components/payback/steps';

const Payback = () => {
  const [showHero, setShowHero] = useState(true);

  const handleButtonClick = () => {
    setShowHero(false);
  };

  return (
    <section className='bg-gray_50 h-full'>
      <Topbar />
      {showHero ? <Hero handleButtonClick={handleButtonClick} /> : <Steps />}
    </section>
  );
}

export default Payback;
