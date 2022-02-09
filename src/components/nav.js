import React, { useEffect, useRef } from "react";
import { CSSTransitionGroup } from 'react-transition-group'
import styled from '@emotion/styled';

import { navLinks } from "@config";
import { ResumeButton } from "@components";
import { TurnedIn } from "@mui/icons-material";

const StyledNav = styled.nav`
  display: grid;
  grid: 1fr / 1fr 7fr;
  padding: 0px 40px;
  height: 100px;
  align-items: center;

  .links-outer {
    grid-area: 1 / 2;
    justify-self: flex-end;
    
    ol {
      padding: 0;
      margin: 0px ${props => props.current ? '100px' : '0px'} 0px 0px;
      transition: all 250ms 1200ms cubic-bezier(0.645, 0.045, 0.355, 1);
  
      li {
        display: inline;
        margin: 0 5px;
        position: relative;
        counter-increment: item 1;
        font-size: var(--fz-md);
      }
    }
  }

  .resume-button {
    grid-area: 1 / 2;
    justify-self: flex-end;
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
  const [showResumeButton, setShowResumeButton] = React.useState(false);
  const linksRef = useRef(null);

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

  const handleTransitionEnd = (props) => {
    if ( props.target === linksRef.current && current > 0 ) {
      setShowResumeButton(true);
    }
  };

  return (
    <StyledNav current={current} active={active} onTransitionEnd={handleTransitionEnd}>
      <HomeButton onClick={handleHomeClick} >{`PW`}</HomeButton>
      <div className="links-outer" >
          <ol ref={linksRef}>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <li key={i}>
                  <StyledLinkButton 
                    onClick={() => handleLinkClick(i + 1)} 
                    active={active === i + 1}
                  >
                    {name}
                  </StyledLinkButton>
                </li>
              ))}
          </ol>
      </div>
      <ResumeButton 
        current={current}
        visible={showResumeButton}
        setVisible={setShowResumeButton}
      />
    </StyledNav>
  );
};

export default Nav;
