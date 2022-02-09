import React from 'react';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
  padding: 0% 15%;

  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz-heading));
    white-space: nowrap;

    &:before {
      position: relative;
      bottom: 4px;
      counter-increment: section;
      content: '0' '${props => props.sectionID || 'x'}' '.';
      margin-right: 10px;
      color: var(--highlight);
      font-family: var(--font-mono);
      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
      font-weight: 400;

      @media (max-width: 480px) {
        margin-bottom: -3px;
        margin-right: 5px;
      }
    }

    &:after {
      content: '';
      display: block;
      position: relative;
      top: -5px;
      width: 100%;
      height: 1px;
      margin-left: 20px;
      background-color: var(--text1);
    }
  }
`;

const Content = ( { sectionID, heading, children } ) => {
  
  return (
    <StyledDiv sectionID={sectionID} >
      { heading && <h2 className="numbered-heading">{heading}</h2> }
      {children}
    </StyledDiv>
  )
}

export default Content;
