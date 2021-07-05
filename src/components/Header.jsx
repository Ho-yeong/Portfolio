import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { Logo } from './index';

const S = {
  Wrapper: styled.div`
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: all 0.2s ease-in-out;
    background-color: ${({ isScroll, theme }) => (isScroll ? theme.palette.header : 'none')};
    box-shadow: ${props => (props.isScroll ? '0 0 16px 8px rgba(0, 0, 0, 0.03)' : 'none')};
  `,
  Header: styled.header`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    padding-top: 0.5rem;
    transition: all 0.2s ease-in-out;
    height: ${props => (props.isScroll ? '100px' : '110px')};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  Logo: styled.span`
    font-weight: 900;
    font-size: 1.5rem;
    flex: 0 0 25%;
    max-width: 25%;
  `,
  Navigation: styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    display: flex;
    justify-content: center;
  `,
  NavigationItem: styled.a`
    color: ${({ isScroll, theme }) => (isScroll ? theme.palette.white : theme.palette.black)};
    margin: 0 1rem;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  `,
  ButtonWrapper: styled.div`
    flex: 0 0 25%;
    max-width: 25%;
    display: flex;
    justify-content: flex-end;
  `,
};

const NAVIGATION_ITEMS = ['Home', 'About', 'Services', 'Blog', 'Contact'];

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 0) {
      setIsScroll(true);
    }
    if (window.pageYOffset === 0) {
      setIsScroll(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousewheel', handleScroll);
    return () => {
      window.removeEventListener('mousewheel', handleScroll);
    };
  }, [handleScroll]);

  return (
    <S.Wrapper isScroll={isScroll}>
      <S.Header isScroll={isScroll}>
        <S.Logo isScroll={isScroll}>
          <Logo width={'90px'} height={'90px'} />
        </S.Logo>

        <S.Navigation>
          {NAVIGATION_ITEMS.map(item => (
            <S.NavigationItem key={item} isScroll={isScroll}>
              {item}
            </S.NavigationItem>
          ))}
        </S.Navigation>
      </S.Header>
    </S.Wrapper>
  );
};

export default Header;