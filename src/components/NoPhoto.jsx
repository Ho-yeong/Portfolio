import React from 'react';
import styled from 'styled-components';
import { noPhotoIcon } from '../assets';

const S = {
  Wrapper: styled.div`
    height: 36rem;
    max-width: 55rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2rem;
  `,
  Image: styled.div`
    width: 6rem;
    height: 6rem;
    background: no-repeat center/cover url(${noPhotoIcon});
  `,
};

const NoPhoto = () => {
  return (
    <S.Wrapper>
      <S.Image></S.Image>
    </S.Wrapper>
  );
};

export default NoPhoto;
