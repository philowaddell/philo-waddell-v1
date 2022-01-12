import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

import { usePrefersReducedMotion } from '@hooks';

import { srConfig } from '@config';
import sr from '@utils/sr';

import Section from  '@templates/section';

const StyledContent = styled.div`

  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: flex-start;
  justify-content: center;
  padding: 10%;

  .sub-heading {
    var(--slate);
    font-size: clamp(12px, 2.5vw, 23px);
  }

`;

const Home = () => {
  const sectionRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(sectionRef.current, srConfig());
  }, [prefersReducedMotion]);

  return (
    <Section id='home' background='#011f54'>
      <StyledContent ref={sectionRef}>
        <h1 className='big-heading'>Philo Waddell</h1>
        <h3 className='sub-heading'>Software Engineer | Machine Learning Enthusiast</h3>
      </StyledContent>
    </Section>
  )
}

export default Home;