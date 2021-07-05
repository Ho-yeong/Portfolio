import React from 'react';
import styled from 'styled-components';
import { pam2 } from '../../../assets';

const S = {
  Background: styled.section`
    position: absolute;
    top: 0;
    width: 100%;
    height: 80rem;
  `,
  Pic: styled.div``,
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    max-width: 1180px;
    margin: 0 auto;
    background: no-repeat center/cover url(${pam2});
    background-position: 0 86%;
    padding-top: 100px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  Title: styled.h1`
    ${props => props.theme.typography.title};
    color: #fff;
    margin-bottom: 0.5rem;
  `,
  Description: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.white};
    margin-bottom: 2rem;
  `,
};

const Main = () => {
  return (
    <S.Background>
      <S.Pic />
      <S.Wrapper>
        <S.Title></S.Title>
        <S.Description></S.Description>
      </S.Wrapper>
    </S.Background>
  );
};

export default Main;
