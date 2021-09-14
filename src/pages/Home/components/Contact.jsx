import React from 'react';
import styled from 'styled-components';
import { AiTwotonePhone, AiOutlineMail } from 'react-icons/ai';
import { FiMapPin } from 'react-icons/fi';

const S = {
  Background: styled.section`
    width: 100%;
    background-color: ${props => props.theme.palette.lightgray};
  `,
  Wrapper: styled.div`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 6rem 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  `,
  Title: styled.h3`
    ${props => props.theme.typography.subtitle};
    margin: 1rem 0;
  `,
  Description: styled.p`
    ${props => props.theme.typography.description};
    color: #494949;
  `,
};

const Contact = () => {
  return (
    <S.Background id="Contact">
      <S.Wrapper>
        <div>
          <S.Title>Contact Info</S.Title>
          <br />
          <S.Description>
            <AiTwotonePhone /> &nbsp; +82 10-7663-5663
          </S.Description>
          <S.Description>
            <FiMapPin /> &nbsp; Gangnam, Seoul, South Korea
          </S.Description>
          <S.Description>
            <AiOutlineMail />
            &nbsp; ghdud0503@gmail.com
          </S.Description>
        </div>
        <div />
      </S.Wrapper>
    </S.Background>
  );
};

export default Contact;
