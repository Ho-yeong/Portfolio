import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { Link, scrollSpy, animateScroll as scroll } from 'react-scroll';

const S = {
  Wrapper: styled.div`
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 1000;
    transition: all 0.2s ease-in-out;
    background-color: ${({ isScroll, theme }) => (isScroll ? theme.palette.white : 'none')};
    box-shadow: ${props => (props.isScroll ? '0 0 16px 8px rgba(0, 0, 0, 0.03)' : 'none')};
  `,
  Header: styled.header`
    width: 100%;
    max-width: 1180px;
    margin: auto;
    transition: all 0.2s ease-in-out;
    height: ${props => (props.isScroll ? '80px' : '100px')};
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
  NavigationItem: styled.div`
    color: ${({ isScroll, theme }) => (isScroll ? theme.palette.black : theme.palette.white)};
    margin: 0 1rem;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 700;
    padding: 0 0.3rem 0.1rem 0.3rem;
    &:hover {
      opacity: 0.5;
      border-bottom: 1px solid black;
    }
  `,
  NavItemText: styled.span`
    ${({ active }) => (active ? 'border-bottom: 1px solid black' : '')};
  `,
  ButtonWrapper: styled.div`
    flex: 0 0 25%;
    max-width: 25%;
    display: flex;
    justify-content: flex-end;
  `,
};

const NAVIGATION_ITEMS = ['Home', 'About', 'Services', 'Projects', 'Contact'];

const Header = () => {
  useEffect(() => {
    scroll.scrollToTop();
    scrollSpy.update();
  }, []);

  const [isScroll, setIsScroll] = useState(false);
  const [selected, setSelected] = useState('');

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
        <S.Logo isScroll={isScroll}></S.Logo>

        <S.Navigation>
          {NAVIGATION_ITEMS.map(item => (
            <S.NavigationItem key={item} isScroll={isScroll}>
              <Link
                to={item}
                smooth={true}
                spy={true}
                offset={-200}
                onSetActive={() => {
                  setSelected(item);
                }}
                onClick={() => {
                  if (item === 'Home') {
                    scroll.scrollToTop();
                    setTimeout(() => {
                      setIsScroll(false);
                    }, 500);
                  } else {
                    setIsScroll(true);
                  }
                }}
              >
                <S.NavItemText active={selected === item ? true : false}>{item.toUpperCase()}</S.NavItemText>
              </Link>
            </S.NavigationItem>
          ))}
        </S.Navigation>
      </S.Header>
    </S.Wrapper>
  );
};

export default Header;
