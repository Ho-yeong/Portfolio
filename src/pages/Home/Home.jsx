import React from 'react';
import { Header } from '../../components';
import Main from './components/Main';

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <div style={{ height: '100vh' }}></div>
    </>
  );
};

export default Home;
