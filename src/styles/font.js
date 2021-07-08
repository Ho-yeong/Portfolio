import { css } from 'styled-components';
import Oswald from './fonts/Oswald-SemiBold.ttf';

export default css`
  @font-face {
    font-family: 'Oswald';
    src: local('Oswald'), url(${Oswald}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }
`;
