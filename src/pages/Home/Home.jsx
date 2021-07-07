import React from 'react';
import { Header } from '../../components';
import Main from './components/Main';
import About from './components/About';
import Services from './components/Service';
import Projects from './components/Project';

const Home = () => {
  return (
    <>
      <Header id="Home" />
      <Main />
      <About />
      <Services />
      <Projects />
    </>
  );
};

export default Home;
