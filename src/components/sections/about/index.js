import React from 'react';
import styled from '@emotion/styled';

import Section from  '@templates/section';

const StyledH1 = styled.h1`
  color: #F2E0CA;
`;

const About = () => {

  return (
    <Section background='#D13F53'>
      <StyledH1>About</StyledH1>
    </Section>
  )
}

export default About;
