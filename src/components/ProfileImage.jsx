import styled from 'styled-components';

const ProfileImage = ({ width, height, image }) => {
  const LogoImg = styled.img.attrs({ src: image })`
    border-radius: 50%;
    width: ${width};
    height: ${height};
  `;

  return <LogoImg src={image} />;
};

export default ProfileImage;
