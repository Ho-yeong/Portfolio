import React from 'react';
import styled from 'styled-components';
import { story1, story2, story3, story4, story5, story6, story7, story8, story9 } from '../../../assets';
import { useScrollClipPath } from '../../../hooks';
import ReactSwipe from 'react-swipe';

const S = {
  Wrapper: styled.section`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 580px;
  `,
  Label: styled.p`
    display: inline-block;
    ${props => props.theme.typography.label};
    color: ${props => props.theme.palette.primary};
    margin-bottom: 1rem;
  `,
  Title: styled.h2`
    ${props => props.theme.typography.subtitle};
    color: ${props => props.theme.palette.black};
    margin-bottom: 1rem;
  `,
  Description: styled.p`
    ${props => props.theme.typography.description};
    color: ${props => props.theme.palette.black};
    margin-bottom: 2rem;
  `,
  Slide: styled.div`
    width: 800px;
    height: 765px;
    position: relative;
  `,
  SlideItem: styled.div`
    width: 790px;
    height: 740px;
    background: no-repeat center/cover url(${({ item }) => (item ? item : '')});
  `,
  RightArrowButton: styled.div`
    position: absolute;
    height: 25px;
    width: 25px;
    border: 10px solid ${props => props.theme.palette.primary};
    border-width: 5px 5px 0 0;
    transform: rotate(45deg);
    top: 22rem;
    left: 47rem;
    cursor: pointer;
    transition: border-width;
    transition-duration: 0.08s;

    &:hover {
      border-width: 8px 8px 0 0;
    }
  `,
  LeftArrowButton: styled.div`
    position: absolute;
    height: 25px;
    width: 25px;
    border: 10px solid ${props => props.theme.palette.primary};
    border-width: 5px 5px 0 0;
    transform: rotate(225deg);
    top: 22rem;
    left: 2rem;
    cursor: pointer;
    transition: border-width;
    transition-duration: 0.08s;

    &:hover {
      border-width: 8px 8px 0 0;
    }
  `,
};
const Slide = () => {
  const animatedImage = useScrollClipPath();

  const images = [story1, story2, story3, story4, story5, story6, story7, story8, story9];

  let reactSwipeEl;

  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.Label>탄생 설화</S.Label>
        <S.Title>
          좋은데이 와 민트초코 <br />그 첫 번째 이야기
        </S.Title>
        <S.Description>
          예로부터 민두초고(民讀草苦)라 하여 <br />
          민초들의 괴로움을 읽어 위로를 준다는 <br />
          신비한 주전부리가 있었는데....
        </S.Description>
      </S.TextWrapper>
      <S.Slide {...animatedImage}>
        <ReactSwipe className="carousel" swipeOptions={{ continuous: false }} ref={el => (reactSwipeEl = el)}>
          {images.map(item => {
            return <S.SlideItem item={item} />;
          })}
        </ReactSwipe>
        <S.LeftArrowButton onClick={() => reactSwipeEl.prev()} />
        <S.RightArrowButton onClick={() => reactSwipeEl.next()} />
      </S.Slide>
    </S.Wrapper>
  );
};

export default Slide;
