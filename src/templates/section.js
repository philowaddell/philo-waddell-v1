import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

import { usePrefersReducedMotion } from '@hooks';

import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledSection = styled.section`
  background:  ${props => props.background ? props.background : 'white'};
  display: flex;
`;

const Content = styled.div`
  flexGrow: 1;
`;

const Section = (props) => {
  const sectionRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  console.log(props)

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(sectionRef.current, srConfig());
  }, [prefersReducedMotion]);

  return (
    <StyledSection background={props.background}>
      <Content ref={sectionRef}>
        {props.children}
      </Content>
    </StyledSection>
  )
}

export default Section;
