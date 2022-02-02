import React, { useEffect } from "react";
import styled from '@emotion/styled';
import { navLinks } from "@config";

const StyledNav = styled.nav`
  display: grid;
  grid: 1fr / 1fr 7fr;
  padding: 0px 40px;
  height: 100px;
  align-items: center;
`;

const StyledLinks = styled.div`
  grid-area: 1 / 2;
  justify-self: flex-end;
  
  ol {
    padding: 0;
    margin: 0;

    li {
      display: inline;
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-md);
    }
`;


const StyledLinkButton = styled.button`
    color: ${props => props.active ? 'var(--highlight)' : 'var(--text2)'};
    background-color: transparent;
    padding: 0.75rem 1rem;
    border: none;
    margin-right: 10px;
    cursor: pointer;
    transition: var(--transition);
    &:hover {
      color: var(--highlight);
    }

    &:before {
      content: '0' counter(item) '.';
      margin-right: 5px;
      color: var(--highlight);
      transition: var(--transition);
    }
    
`;

const HomeButton = styled.button`
  justify-self: center;
  grid-area: 1 / 1; 
  color: var(--highlight);
  font-size: var(--fz-xl);
  background-color: transparent;
  width: 70px;
  height: 70px;
  border: 2px solid var(--highlight);
  border-radius: 35px;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: var(--transition);
  &:hover {
    background-color: var(--tint);
    outline: none;
  }
`;

const Nav = ( { current, setIncrement } ) => {

  const [active, setActive] = React.useState(0);

  useEffect(() => {
    setActive(current);
  }, [current]);

  const handleLinkClick = (clicked) => {
    setIncrement(clicked - current);
    setActive(clicked);
  };

  const handleHomeClick = () => {
    setIncrement(0 - current);
  };

  return (
    <StyledNav>
      <HomeButton onClick={handleHomeClick} >{`PW`}</HomeButton>
      <StyledLinks>
        <ol>
          {navLinks &&
            navLinks.map(({ url, name }, i) => (
              <li key={i}>
                <StyledLinkButton 
                  onClick={() => handleLinkClick(i + 1)} 
                  active={active == i + 1}
                >
                  {name}
                </StyledLinkButton>
              </li>
            ))}
        </ol>
      </StyledLinks>
    </StyledNav>
  );
};

export default Nav;
