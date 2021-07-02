import styled from 'styled-components';
import { logo } from '../assets';

const Logo = ({ width, height }) => {
  const LogoImg = styled.img.attrs({ src: logo })`
    border-radius: 50%;
    width: ${width};
    height: ${height};
  `;

  return <LogoImg src={logo} />;
};

export default Logo;
