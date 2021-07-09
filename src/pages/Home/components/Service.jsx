import React from 'react';
import styled from 'styled-components';
import { useScrollFadeIn } from '../../../hooks';
import { Glitch, Glow, ScanLines } from './Project';
import {
  awsLogo,
  goLogo,
  graphqlLogo,
  javaLogo,
  jenkinsLogo,
  mongodbLogo,
  mysqlLogo,
  nodeJsLogo,
  postgresqlLogo,
  reactLogo,
  redisLogo,
  typeScriptLogo,
} from '../../../assets';

const S = {
  Wrapper: styled.div`
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
    padding: 120px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  Label: styled.div`
    display: inline-block;
    color: ${props => props.theme.palette.primary};
    margin-bottom: 1rem;
    position: relative;
  `,
  Title: styled.h2`
    ${props => props.theme.typography.subtitle};
    color: ${props => props.theme.palette.black};
    text-align: center;
    margin-bottom: 1rem;
  `,
  Description: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.black};
    margin-bottom: 4rem;
    font-size: 1.3rem;
    font-weight: 600;
  `,
  List: styled.ul`
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(4, 1fr);
    @media only screen and (min-width: 1440px) {
      /* styles for browsers larger than 1440px; */
      grid-template-rows: 1fr 1fr;
      grid-template-columns: repeat(6, 1fr);
    }
    grid-gap: 0.5rem;
  `,
  ListItem: styled.li`
    width: 200px;
    padding: 1rem 0;
    border: 1px solid ${props => props.theme.palette.primary};
    box-shadow: 0 0 16px 8px rgba(0, 0, 0, 0.03);
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-self: center;
  `,
  ItemImage: styled.div`
    width: 80%;
    height: 6rem;
    border-radius: 0.5rem 0.5rem 0 0;
    background: no-repeat center/cover url(${props => props.image});
    background-size: 50%;
    align-self: center;
  `,
  TextContainer: styled.div`
    padding: 1rem 2rem;
  `,
  ItemTitle: styled.h3`
    ${props => props.theme.typography.heading};
    color: ${props => props.theme.palette.black};
    margin-bottom: 0.75rem;
  `,
  ItemLabel: styled.p`
    ${props => props.theme.typography.caption};
    color: ${props => props.theme.palette.gray};
    font-weight: 400;
  `,
};

const WORKS_ITEMS = [
  {
    image: nodeJsLogo,
    title: 'Node.js',
    label: 'Main',
  },
  {
    image: reactLogo,
    title: 'React',
    label: 'Main',
  },
  {
    image: goLogo,
    title: 'Go',
    label: 'Middle',
  },
  {
    image: graphqlLogo,
    title: 'GraphQL',
    label: 'Middle',
  },
  {
    image: typeScriptLogo,
    title: 'TypeScript',
    label: 'Middle',
  },
  {
    image: javaLogo,
    title: 'Java',
    label: 'Low',
  },
  {
    image: mysqlLogo,
    title: 'MySQL',
    label: 'Middle',
  },
  {
    image: postgresqlLogo,
    title: 'PostgreSQL',
    label: 'Middle',
  },
  {
    image: mongodbLogo,
    title: 'MongoDB',
    label: 'Low',
  },
  {
    image: redisLogo,
    title: 'Redis',
    label: 'Low',
  },
  {
    image: awsLogo,
    title: 'AWS',
    label: 'Middle',
  },
  {
    image: jenkinsLogo,
    title: 'Jenkins',
    label: 'Low',
  },
];

const Services = () => {
  const animatedItem = {
    0: useScrollFadeIn('left', 1, 0),
    1: useScrollFadeIn('left', 1, 0.2),
    2: useScrollFadeIn('left', 1, 0.4),
    3: useScrollFadeIn('left', 1, 0.7),
    4: useScrollFadeIn('left', 1, 1.1),
    5: useScrollFadeIn('left', 1, 1.5),
    6: useScrollFadeIn('left', 1, 0.1),
    7: useScrollFadeIn('left', 1, 0.3),
    8: useScrollFadeIn('left', 1, 0.5),
    9: useScrollFadeIn('left', 1, 0.9),
    10: useScrollFadeIn('left', 1, 1.2),
    11: useScrollFadeIn('left', 1, 1.6),
  };

  return (
    <S.Wrapper id="Services">
      <S.Label>
        <Glitch data-text="Services" style={{ color: '#2f5d63' }}>
          Services
        </Glitch>
        <Glow>Services</Glow>
        <ScanLines />
      </S.Label>
      <S.Description>What I'm doing</S.Description>
      <S.List>
        {WORKS_ITEMS.map((item, index) => (
          <S.ListItem key={item.title} {...animatedItem[index]}>
            <S.ItemImage image={item.image} />
            <S.TextContainer>
              <S.ItemTitle>{item.title}</S.ItemTitle>
              <S.ItemLabel>{item.label}</S.ItemLabel>
            </S.TextContainer>
          </S.ListItem>
        ))}
      </S.List>
    </S.Wrapper>
  );
};

export default Services;
