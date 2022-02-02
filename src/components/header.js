import React from "react";
import styled from '@emotion/styled';

import { Nav } from "@components";

const StyledHeader = styled.header`
  grid-area: 1 / 1 / 1 / 4;
  z-index: 1;
`;

const Header = ( props ) => {

  return (
    <StyledHeader>
      <Nav {...props} />
    </StyledHeader>
  );
};

export default Header;