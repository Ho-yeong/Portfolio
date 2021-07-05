import React from 'react';
import styled from 'styled-components';
import { desc } from '../../../assets';

const S = {
  Background: styled.section`
    width: 100%;
    height: 100rem;
  `,
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    max-width: 1180px;
    margin: 0 auto;
    background: no-repeat center/cover url(${desc});
    background-position: 0 86%;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
};

const Main = () => {
  return (
    <S.Background>
      <S.Wrapper />
    </S.Background>
  );
};

export default Main;
