import React from 'react';
import Hero from '../../components/hero/Hero';
import QuickState from '../../components/quickstate/QuickState';
import Friends from './friends/Friends';

const Homepage = () => {
  return (
    <div>
      <Hero></Hero>
      <QuickState></QuickState>
      <Friends></Friends>
    </div>
  );
};

export default Homepage;