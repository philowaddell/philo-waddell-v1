import React from 'react';
import styled from '@emotion/styled';

import { Section }  from  '@templates';
import { resumeFileID } from '@config';
import { ResumeButton } from "@components";

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
        <ResumeButton 
          // This is a bit hacky, should refactor component
          current={1}
          visible={true}
          setVisible={() => true}
        />
      </StyledContent>
    </Section>
  )
}

export default Home;