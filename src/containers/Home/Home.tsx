import React from 'react';
import Header from '../../components/Header';
import Experiences from './Experiences';
import AboutMe from './AboutMe';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Experiences></Experiences>
    </>
  );
};

export default Home;
