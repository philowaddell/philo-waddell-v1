import React from 'react';
import styled from '@emotion/styled';

import { Section }  from  '@templates';

const StyledContent = styled.div`

  .sub-heading {
    color: var(--text2);
    font-size: clamp(12px, 2.5vw, 21px);
  }

`;

const Home = (props) => {

  const resumeClicked = () => {

  };

  return (
    <Section {...props}>
      <StyledContent >
        <h1 className='big-heading'>Philo Waddell</h1>
        <h2 className='sub-heading'>Full Stack Engineer & Machine Learning Enthusiast</h2>
        <button className='smallButton' onClick={() => resumeClicked()}>Resume</button>
      </StyledContent>
    </Section>
  )
}

export default Home;