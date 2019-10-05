import React from "react";
import { FlexContainer, ContentContainer } from './Layout.style'
import spotifyIcon from "../../assets/spotify.png";

const Layout = ({ children }) => {
  return (
    <FlexContainer>
      <div>
        <img src={spotifyIcon} width="48px" />
      </div>
      <ContentContainer>{children}</ContentContainer>
    </FlexContainer>
  );
};

export default Layout;
