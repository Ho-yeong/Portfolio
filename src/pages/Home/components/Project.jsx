import React from 'react';
import styled from 'styled-components';
import { useScrollClipPath } from '../../../hooks';
import ReactSwipe from 'react-swipe';
import { NoPhoto } from '../../../components';
import { gitLogo, uberShot, drawingShot, slackShot } from '../../../assets';

const S = {
  Background: styled.section`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.palette.black};
    margin-top: 15rem;
  `,
  Wrapper: styled.section`
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    padding: 100px 0;
    padding-top: 50px;
  `,
  TextWrapper: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 3rem;
    border-bottom: 1px solid #f2f2f2;
  `,
  Text: styled.div`
    ${props => props.theme.typography.label};
    color: #fff;
    margin-bottom: 1rem;
    font-style: italic;
    font-size: 3rem;
  `,
  SlideText: styled.div`
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  Title: styled.h2`
    ${props => props.theme.typography.subtitle};
    color: ${props => props.theme.palette.white};
    margin-bottom: 2rem;
  `,
  Description: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.white};
  `,
  Slide: styled.div`
    width: 100%;
    position: relative;
  `,
  SliedItemWrapper: styled.div`
    display: grid;
    grid-template-columns: 0.2fr 0.8fr;
  `,
  SlideItem: styled.div`
    height: 36rem;
    max-width: 55rem;
    background: no-repeat center/contain url(${({ item }) => (item ? item : '')});
    background-position: center;
  `,
  Controller: styled.div`
    color: ${props => props.theme.palette.white};
    display: flex;
    justify-content: space-between;
    font-style: italic;
    font-family: 'Oswald';
    font-size: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid #f2f2f2;
  `,
  Next: styled.div`
    cursor: pointer;
    &:hover {
      text-shadow: 4px 2px 7px rgba(206, 206, 206, 0.55);
      transform: scale(1.05);
    }
  `,
  Prev: styled.span`
    cursor: pointer;
    &:hover {
      text-shadow: 4px 2px 7px rgba(206, 206, 206, 0.55);
      transform: scale(1.05);
    }
  `,
  SnsWrapper: styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `,
  Sns: styled.div`
    filter: invert(100%);
    cursor: pointer;
    width: 2.5rem;
    height: 2.5rem;
    margin-top: 1rem;
    border-radius: 50%;
    background: no-repeat center/cover url(${gitLogo});
    transition-property: transform, box-shadow;
    transition-duration: 0.15s;

    &:hover {
      box-shadow: 0px 0px 16px -2px rgba(0, 0, 0, 1);
      transform: scale(1.05);
    }
  `,
  ATag: styled.a`
    color: #63bfcc;
    font-size: 1.2rem;
  `,
};

export const Glitch = styled.div`
  color: #fff2f2;
  position: relative;
  animation: glitch 5s 5s infinite;
  font-style: italic;
  font-size: 3rem;
  font-family: 'Oswald';

  &:before {
    content: attr(data-text);
    position: absolute;
    left: -2px;
    text-shadow: -5px 0 magenta;
    background: #222525;
    overflow: hidden;
    top: 0;
    animation: noise-1 3s linear infinite alternate-reverse, glitch 5s 5.05s infinite;
  }
  &:after {
    content: attr(data-text);
    position: absolute;
    left: 2px;
    text-shadow: -5px 0 lightgreen;
    background: #222525;
    overflow: hidden;
    top: 0;
    animation: noise-2 3s linear infinite alternate-reverse, glitch 5s 5s infinite;
  }

  &.projects {
    color: #fff;
    margin-bottom: 1rem;
    font-weight: 700;
  }
`;

export const Glow = styled.div`
  animation: glitch 5s 5s infinite;
  text-shadow: 0 0 1000px #dfbfbf;
  color: transparent;
  position: absolute;
  top: 0;

  &:before {
    content: attr(data-text);
    position: absolute;
    left: -2px;
    text-shadow: -5px 0 magenta;
    background: #222525;
    overflow: hidden;
    top: 0;
    animation: noise-1 3s linear infinite alternate-reverse, glitch 5s 5.05s infinite;
  }
  &:after {
    content: attr(data-text);
    position: absolute;
    left: 2px;
    text-shadow: -5px 0 lightgreen;
    background: #222525;
    overflow: hidden;
    top: 0;
    animation: noise-2 3s linear infinite alternate-reverse, glitch 5s 5s infinite;
  }
`;

export const ScanLines = styled.div`
  overflow: hidden;
  mix-blend-mode: difference;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: repeating-linear-gradient(to bottom, transparent 0%, rgba(34, 34, 37, 0.05) 0.5%, transparent 1%);
    animation: fudge 7s ease-in-out alternate infinite;
  }
`;

const Projects = () => {
  const animatedImage = useScrollClipPath();

  let reactSwipeEl;

  const onClick = url => {
    const win = window.open(url, '_blank');
    win.focus();
  };

  const projects = [
    {
      image: uberShot,
      url: 'https://github.com/Ho-yeong/uber-eats-clone',
      title: 'Uber Eats Clone',
      description: ['Node.js', 'TypeScript', 'Nest.js', 'GraphQL', 'React', 'AWS S3', 'PostgreSQL'],
    },
    {
      image: drawingShot,
      url: 'https://github.com/Ho-yeong/realtime-nodejs',
      title: 'Real time Drawing Game',
      description: ['Node.js', 'Express', 'Socket.io', 'Pug'],
    },
    {
      url: 'https://github.com/Ho-yeong/BlockChain_go',
      title: 'Block Chain Clone',
      description: ['Go'],
    },
    {
      image: slackShot,
      url: 'https://github.com/Ho-yeong/slack',
      title: 'Slack Clone',
      description: ['Node.js', 'React', 'GraphQL', 'MongoDB', 'JWT'],
    },
    {
      url: 'https://github.com/team-333/team-work',
      title: 'Yeol-Gong',
      description: ['Java', 'Spring', 'MyBatis', 'AWS S3', 'AWS EC2', 'Oracle'],
      link: 'https://docs.google.com/presentation/d/1X_E7AnAqoH463mN3xhMgDq9pD5My1WKVPjBdYYiARSs/edit?usp=sharing',
    },
  ];

  return (
    <S.Background id="Projects">
      <S.Wrapper>
        <S.TextWrapper>
          <Glitch className="projects" data-text="Projects">
            Projects
          </Glitch>
          <Glow>Projects</Glow>
          <ScanLines />
        </S.TextWrapper>
        <S.Slide {...animatedImage}>
          <ReactSwipe className="carousel" swipeOptions={{ continuous: true }} ref={el => (reactSwipeEl = el)}>
            {projects.map(item => {
              return (
                <S.SliedItemWrapper key={item.title}>
                  <S.SlideText>
                    <div>
                      <S.Title>{item.title}</S.Title>
                      {item.description.map(v => (
                        <S.Description key={v}>{v}</S.Description>
                      ))}
                    </div>
                    <S.SnsWrapper>
                      {item.link ? (
                        <S.ATag href={item.link} target="_blank" rel="noreferrer">
                          Check Docs
                        </S.ATag>
                      ) : (
                        ''
                      )}
                      <S.Sns
                        onClick={() => {
                          onClick(item.url);
                        }}
                      />
                    </S.SnsWrapper>
                  </S.SlideText>
                  {item.image ? <S.SlideItem item={item.image} /> : <NoPhoto />}
                </S.SliedItemWrapper>
              );
            })}
          </ReactSwipe>
        </S.Slide>
        <S.Controller>
          <S.Prev onClick={() => reactSwipeEl.prev()}>Prev</S.Prev>
          <S.Next onClick={() => reactSwipeEl.next()}>Next</S.Next>
        </S.Controller>
      </S.Wrapper>
    </S.Background>
  );
};

export default Projects;
