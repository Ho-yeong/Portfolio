import React from 'react';
import styled from 'styled-components';
import ProfileImage from '../../../components/ProfileImage';

const S = {
  Background: styled.section`
    width: 100%;
    background-color: ${props => props.theme.palette.lightgray};
    margin-top: 55%;
    @media only screen and (min-width: 1920px) {
      /* styles for browsers larger than 1440px; */
      margin-top: 70%;
    }
  `,
  Wrapper: styled.div`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 6rem 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `,
  List: styled.ul`
    display: flex;
  `,
  ListItem: styled.li`
    width: 100%;
    padding: 0 2rem;
    text-align: center;
    &:nth-child(2) {
      border: 2px solid ${props => props.theme.palette.white};
      border-top: none;
      border-bottom: none;
    }
  `,
  Number: styled.span`
    ${props => props.theme.typography.subtitle};
    color: ${props => props.theme.palette.secondary};
    font-size: 3rem;
    margin-bottom: 1rem;
  `,
  Unit: styled.span`
    ${props => props.theme.typography.subtitle};
    color: ${props => props.theme.palette.secondary};
    font-size: 3rem;
    margin-bottom: 1rem;
  `,
  Title: styled.h3`
    ${props => props.theme.typography.subtitle};
    margin: 1rem 0;
  `,
  Description: styled.p`
    ${props => props.theme.typography.description};
    color: #7f7f7f;
  `,
};

const About = () => {
  return (
    <S.Background id="About">
      <S.Wrapper>
        <div>
          <S.Title>About Me</S.Title>
          <S.Description style={{ color: 'gray ' }}>Game Developer & Web Developer</S.Description>
          <br />
          <S.Description>I'm currently working at Treenod in Hae-Un-Dae, Busan, South Korea</S.Description>
          <S.Description>I'm a native Korean Speaker and can speak English, Japanese</S.Description>
          <S.Description>I'm not only a faster learner but also trying to learn anytime, anywhere</S.Description>
        </div>
        <ProfileImage width="300px" height="300px" image={'https://avatars.githubusercontent.com/u/58277160?v=4'} />
      </S.Wrapper>
    </S.Background>
  );
};

export default About;
