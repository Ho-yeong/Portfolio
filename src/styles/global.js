import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import fonts from './font';
import glitchKeyFrames from './glitch';

const GlobalStyle = createGlobalStyle`
     ${reset};
      *, *::before, *::after {
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        user-select: none;
      }
      body {
        min-width: 1280px;
        overflow-x: hidden;
      }
      ${fonts}
      ${glitchKeyFrames}
      @keyframes blink{
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
`;

export default GlobalStyle;
