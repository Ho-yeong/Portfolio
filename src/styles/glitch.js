import { css } from 'styled-components';

export default css`
  @keyframes glitch {
    1% {
      transform: rotateX(10deg) skewX(90deg);
    }
    2% {
      transform: rotateX(0deg) skewX(0deg);
    }
  }

  @keyframes noise-1 {
    3.3333333333% {
      clip-path: inset(80px 0 16px 0);
    }
    6.6666666667% {
      clip-path: inset(20px 0 14px 0);
    }
    10% {
      clip-path: inset(13px 0 68px 0);
    }
    13.3333333333% {
      clip-path: inset(99px 0 1px 0);
    }
    16.6666666667% {
      clip-path: inset(39px 0 51px 0);
    }
    20% {
      clip-path: inset(73px 0 5px 0);
    }
    23.3333333333% {
      clip-path: inset(54px 0 24px 0);
    }
    26.6666666667% {
      clip-path: inset(68px 0 9px 0);
    }
    30% {
      clip-path: inset(51px 0 25px 0);
    }
    33.3333333333% {
      clip-path: inset(44px 0 19px 0);
    }
    36.6666666667% {
      clip-path: inset(83px 0 2px 0);
    }
    40% {
      clip-path: inset(83px 0 18px 0);
    }
    43.3333333333% {
      clip-path: inset(78px 0 14px 0);
    }
    46.6666666667% {
      clip-path: inset(60px 0 16px 0);
    }
    50% {
      clip-path: inset(13px 0 62px 0);
    }
    53.3333333333% {
      clip-path: inset(15px 0 11px 0);
    }
    56.6666666667% {
      clip-path: inset(41px 0 59px 0);
    }
    60% {
      clip-path: inset(64px 0 9px 0);
    }
    63.3333333333% {
      clip-path: inset(83px 0 15px 0);
    }
    66.6666666667% {
      clip-path: inset(33px 0 43px 0);
    }
    70% {
      clip-path: inset(74px 0 5px 0);
    }
    73.3333333333% {
      clip-path: inset(96px 0 4px 0);
    }
    76.6666666667% {
      clip-path: inset(63px 0 13px 0);
    }
    80% {
      clip-path: inset(81px 0 17px 0);
    }
    83.3333333333% {
      clip-path: inset(96px 0 4px 0);
    }
    86.6666666667% {
      clip-path: inset(96px 0 5px 0);
    }
    90% {
      clip-path: inset(58px 0 35px 0);
    }
    93.3333333333% {
      clip-path: inset(61px 0 8px 0);
    }
    96.6666666667% {
      clip-path: inset(63px 0 19px 0);
    }
    100% {
      clip-path: inset(37px 0 59px 0);
    }
  }

  @keyframes noise-2 {
    0% {
      clip-path: inset(38px 0 20px 0);
    }
    3.3333333333% {
      clip-path: inset(39px 0 33px 0);
    }
    6.6666666667% {
      clip-path: inset(35px 0 25px 0);
    }
    10% {
      clip-path: inset(30px 0 3px 0);
    }
    13.3333333333% {
      clip-path: inset(8px 0 78px 0);
    }
    16.6666666667% {
      clip-path: inset(79px 0 12px 0);
    }
    20% {
      clip-path: inset(62px 0 10px 0);
    }
    23.3333333333% {
      clip-path: inset(74px 0 8px 0);
    }
    26.6666666667% {
      clip-path: inset(40px 0 38px 0);
    }
    30% {
      clip-path: inset(39px 0 4px 0);
    }
    33.3333333333% {
      clip-path: inset(48px 0 47px 0);
    }
    36.6666666667% {
      clip-path: inset(78px 0 16px 0);
    }
    40% {
      clip-path: inset(62px 0 25px 0);
    }
    43.3333333333% {
      clip-path: inset(41px 0 43px 0);
    }
    46.6666666667% {
      clip-path: inset(65px 0 32px 0);
    }
    50% {
      clip-path: inset(73px 0 19px 0);
    }
    53.3333333333% {
      clip-path: inset(56px 0 16px 0);
    }
    56.6666666667% {
      clip-path: inset(79px 0 4px 0);
    }
    60% {
      clip-path: inset(48px 0 34px 0);
    }
    63.3333333333% {
      clip-path: inset(26px 0 29px 0);
    }
    66.6666666667% {
      clip-path: inset(83px 0 7px 0);
    }
    70% {
      clip-path: inset(8px 0 25px 0);
    }
    73.3333333333% {
      clip-path: inset(96px 0 3px 0);
    }
    76.6666666667% {
      clip-path: inset(80px 0 3px 0);
    }
    80% {
      clip-path: inset(89px 0 12px 0);
    }
    83.3333333333% {
      clip-path: inset(47px 0 43px 0);
    }
    86.6666666667% {
      clip-path: inset(99px 0 2px 0);
    }
    90% {
      clip-path: inset(82px 0 19px 0);
    }
    93.3333333333% {
      clip-path: inset(9px 0 55px 0);
    }
    96.6666666667% {
      clip-path: inset(94px 0 2px 0);
    }
    100% {
      clip-path: inset(41px 0 49px 0);
    }
  }

  @keyframes fudge {
    from {
      transform: translate(0px, 0px);
    }
    to {
      transform: translate(0px, 2%);
    }
  }
`;
