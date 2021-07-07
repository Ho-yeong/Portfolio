import React, { Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import { Gun3D } from '../../../components/meshes';
import TypingEffect from './TypingEffect';
import Plane from '../../../components/meshes/Plane';
import LoadingBar from 'react-top-loading-bar';

const gitLogo =
  'https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png';

const S = {
  Background: styled.section`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #1c1c1c;
  `,
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    max-width: 1180px;
    margin: 0 auto;
    padding-top: 100px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  Title: styled.h1`
    ${props => props.theme.typography.title};
    color: #fff;
    position: absolute;
    top: 35%;
    left: 50%;
  `,
  Description: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.white};
    font-size: 1.5rem;
    font-weight: 300;
    position: absolute;
    top: 45%;
    left: 50%;
  `,
  Sns: styled.div`
    filter: invert(100%);
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    margin-top: 2rem;
    border-radius: 50%;
    background: no-repeat center/cover url(${gitLogo});
    transition-property: transform, box-shadow;
    transition-duration: 0.15s;

    &:hover {
      box-shadow: 0px 0px 24px -2px rgba(0, 0, 0, 1);
      transform: scale(1.05);
    }
  `,
};

const Main = () => {
  const [progress, setProgress] = useState(0);

  const onClick = () => {
    window.location = 'http://github.com/Ho-yeong';
  };

  const LazyCall = ({ setProgress }) => {
    useEffect(() => {
      setProgress(70);
      return () => {
        setProgress(100);
      };
      //eslint-disable-next-line
    }, []);
    return '';
  };

  return (
    <S.Background>
      <LoadingBar
        color={'#00BCCE'}
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        loaderSpeed={700}
      />
      <Suspense fallback={<LazyCall setProgress={setProgress} />}>
        <Canvas colorManagement camera={{ position: [30, 10, 35], fov: 33 }}>
          <fog attach="fog" args={['#1c1c1c', 5, 100]} />
          <directionalLight intensity={1} />
          <ambientLight intensity={2} />
          <Gun3D />
          <Plane />
          <gridHelper args={[100, 30]} />
          <OrbitControls enableZoom={false} autoRotate={true} />
        </Canvas>
      </Suspense>
      <S.Title>
        <TypingEffect text={["I'm Hoyeong."]} speed={80} eraseDelay={20000} eraseSpeed={150} typingDelay={500} />
      </S.Title>
      <S.Description>
        <div>Game Developer & Web Developer located in Busan</div>
        <TypingEffect
          staticText={'Speciallized in'}
          text={['Node.js', 'React', 'Go']}
          speed={80}
          typingDelay={20}
          eraseSpeed={50}
          eraseDelay={2500}
        />
        <S.Sns onClick={onClick} />
      </S.Description>
    </S.Background>
  );
};

export default Main;
