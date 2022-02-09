import React from 'react';
import styled from '@emotion/styled';

import { Section }  from  '@templates';
import { resumeFileID } from '@config';

const StyledContent = styled.div`

  .sub-heading {
    color: var(--text2);
    font-size: clamp(12px, 2.5vw, 21px);
  }

`;

const Home = (props) => {

  return (
    <Section {...props}>
      <StyledContent >
        <h1 className='big-heading'>Philo Waddell</h1>
        <h2 className='sub-heading'>Full Stack Engineer & Machine Learning Enthusiast</h2>
        <a 
          className='smallButton resume-button' 
          href={`https://docs.google.com/uc?export=download&id=${resumeFileID}`}
        >
          Resume
        </a>
      </StyledContent>
    </Section>
  )
}

export default Home;