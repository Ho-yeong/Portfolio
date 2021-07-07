import React from 'react';
import { Header } from '../../components';
import Main from './components/Main';
import About from './components/About';

const Home = () => {
  return (
    <>
      <Header id="Home" />
      <Main />
      <About />
    </>
  );
};

export default Home;
