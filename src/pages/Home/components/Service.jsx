import React from 'react';
import styled from 'styled-components';
import { useScrollFadeIn } from '../../../hooks';
import { Glitch, Glow, ScanLines } from './Project';

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
    image:
      'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png',
    title: 'Node.js',
    label: 'Main',
  },
  {
    image:
      'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png',
    title: 'React',
    label: 'Main',
  },
  {
    image:
      'https://camo.githubusercontent.com/5ac61e5d2b553a9d5f8d41dcab1d7ef0a4373013ceebfd7d21d2429d78dbcc63/68747470733a2f2f696d672e737461636b73686172652e696f2f736572766963652f313030352f4f3641637a7766565f343030783430302e706e67',
    title: 'Go',
    label: 'Middle',
  },
  {
    image:
      'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/graphql/graphql.png',
    title: 'GraphQL',
    label: 'Middle',
  },
  {
    image: 'https://img.stackshare.io/service/1612/bynNY5dJ.jpg',
    title: 'TypeScript',
    label: 'Middle',
  },
  {
    image:
      'https://camo.githubusercontent.com/9dbe17311c10b4d044938f25101777bb3aa2a33148a12de298b2f4cfc346049e/68747470733a2f2f696d672e737461636b73686172652e696f2f736572766963652f343730322f6a6176612d382d6c6f676f2e706e67',
    title: 'Java',
    label: 'Low',
  },
  {
    image:
      'https://camo.githubusercontent.com/a43c50963df8cc82e208f540c0e933ea54a9c4e64953935592b0f158e30f6889/68747470733a2f2f696d672e737461636b73686172652e696f2f736572766963652f313032352f6c6f676f2d6d7973716c2d313730783137302e706e67',
    title: 'MySQL',
    label: 'Middle',
  },
  {
    image: 'https://img.stackshare.io/service/1028/ASOhU5xJ.png',
    title: 'PostgreSQL',
    label: 'Middle',
  },
  {
    image:
      'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png',
    title: 'MongoDB',
    label: 'Low',
  },
  {
    image: 'https://img.stackshare.io/service/1031/redis.png',
    title: 'Redis',
    label: 'Low',
  },
  {
    image:
      'https://camo.githubusercontent.com/be82102c236a82155d4bde9c80a859be45ff612d1457016963ada083dab1feea/68747470733a2f2f696d672e737461636b73686172652e696f2f736572766963652f333330302f31366666616538633636376264626336613439363966366630323039303635322e706e67',
    title: 'AWS',
    label: 'Middle',
  },
  {
    image:
      'https://camo.githubusercontent.com/bbbd25e5f702e48ae672f5e51ad8d049cf10fec7b19a8917380a92a17f511d09/68747470733a2f2f696d672e737461636b73686172652e696f2f736572766963652f3637302f6a656e6b696e732e706e67',
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
