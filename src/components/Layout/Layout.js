import React from "react";
import { FlexContainer, ImageContainer, ContentContainer } from './Layout.style'
import spotifyIcon from "../../assets/spotify.png";

const Layout = ({ children }) => {
  return (
    <FlexContainer>
      <ImageContainer>
        <img src={spotifyIcon} width="48px" />
      </ImageContainer>
      <ContentContainer>{children}</ContentContainer>
    </FlexContainer>
  );
};

export default Layout;
