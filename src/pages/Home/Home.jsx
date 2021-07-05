import React from 'react';
import { Header } from '../../components';
import Main from './components/Main';
import Feature from './components/Feature';
import Nums from './components/Nums';
import Animals from './components/Animal';
import Slide from './components/Slide';
import Main2 from './components/Main2';

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <Nums />
      <Animals />
      <Slide />
      <Main2 />
      <Feature />
    </>
  );
};

export default Home;
