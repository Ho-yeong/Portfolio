import React from 'react';
import styled from 'styled-components';
import { useScrollCount } from '../../../hooks';

const S = {
  Background: styled.section`
    width: 100%;
    background-color: ${props => props.theme.palette.background};
    margin-top: 74.5rem;
  `,
  Wrapper: styled.div`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding: 50px 0;
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
    ${props => props.theme.typography.subheading};
    margin: 1rem 0;
  `,
  Description: styled.p`
    ${props => props.theme.typography.description};
  `,
};

const FIGURE_ITEMS = [
  {
    title: 'Total Projects',
    number: 630,
    unit: '+',
  },
  {
    title: 'Partners',
    number: 124,
    unit: '',
  },
  {
    title: '도수',
    number: 12.5,
    unit: '%',
  },
];

const Nums = () => {
  const countItem = {
    0: useScrollCount(630),
    1: useScrollCount(124),
    2: '12.5',
  };

  return (
    <S.Background>
      <S.Wrapper>
        <S.List>
          {FIGURE_ITEMS.map((item, index) => (
            <S.ListItem key={item.title}>
              {index === 2 ? <S.Number>{item.number}</S.Number> : <S.Number {...countItem[index]}>0</S.Number>}
              <S.Unit>{item.unit}</S.Unit>
              <S.Title>{item.title}</S.Title>
            </S.ListItem>
          ))}
        </S.List>
      </S.Wrapper>
    </S.Background>
  );
};

export default Nums;
