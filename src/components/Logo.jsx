import styled from 'styled-components';
import { logo } from '../assets';

const Logo = ({ width, height }) => {
  const LogoImg = styled.img`
    margin: 15px;
    width: ${width};
    height: ${height};
  `;
  return <LogoImg src={logo} />;
};

export default Logo;
