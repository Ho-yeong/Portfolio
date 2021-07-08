import React from 'react';
import { Header } from '../../components';
import Main from './components/Main';
import About from './components/About';
import Services from './components/Service';
import Projects from './components/Project';
import Contact from './components/Contact';

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Services />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
