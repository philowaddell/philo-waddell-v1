import React from "react";
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { navLinks } from "@config";
import Grid from "@mui/material/Grid";
import Button from "./button";

const StyledNav = styled.nav`
  position: fixed;
  z-index: 1;
`;

const Nav = () => {
  return (
    <StyledNav>
      <ol>
        {navLinks &&
          navLinks.map(({ url, name }, i) => (
            <li key={i}>
              <Link to={url}>{name}</Link>
            </li>
          ))}
      </ol>
    </StyledNav>
  );
};

export default Nav;
