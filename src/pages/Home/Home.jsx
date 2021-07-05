import React from 'react';
import { Header } from '../../components';
import Main from './components/Main';
import Feature from './components/Feature';
import Nums from './components/Nums';
import Animals from './components/Animal';
import Slide from './components/Slide';

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <Nums />
      <Animals />
      <Slide />
      <Feature />
    </>
  );
};

export default Home;
