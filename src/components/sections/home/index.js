import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

import { usePrefersReducedMotion } from '@hooks';

import { srConfig } from '@config';
import sr from '@utils/sr';

import Section from  '@templates/section';

const StyledContent = styled.div`

  padding: 0px 150px;

  .sub-heading {
    color: var(--primary2);
    font-size: clamp(12px, 2.5vw, 21px);
  }

`;

const Home = (props) => {
  return (
    <Section {...props}>
      <StyledContent >
        <h1 className='big-heading'>Philo Waddell</h1>
        <h3 className='sub-heading'>Full Stack Engineer + ML Enthusiast</h3>
      </StyledContent>
    </Section>
  )
}

export default Home;