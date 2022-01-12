import React from 'react';
import styled from '@emotion/styled';

const StyledSection = styled.section`
  id: ${props => props.id ? props.id : undefined};
  background:  ${props => props.background ? props.background : 'white'};
  display: flex;
`;

const Section = (props) => {

  return (
    <StyledSection {...props}>
      {props.children}
    </StyledSection>
  )
}

export default Section;
