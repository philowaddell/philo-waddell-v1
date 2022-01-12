import React, { useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from '@emotion/styled'

import { usePrefersReducedMotion } from '@hooks';

import { srConfig } from '@config';
import sr from '@utils/sr';

import SkillBar from "./skillbar"

const ExperienceSection = styled.section`
  background: #000294;
`;

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 1%;
`;

const skillList = {
  'AAAAAAAAA': '100', 
  'BBB': '50', 
  'CCCCC': '25',
  'DDDDDDD': '100',
  'EEEE': '90',
}

const SkillBars = ({skillsRef}) => {
  return (
    Object.entries(skillList).map(([skill, width], i) => (
        <CSSTransition
          key={i}
          classNames="fadeup"
          timeout={i >= 5 ? (i - 5) * 300 : 300}
          exit={false}
        >
          <SkillBar 
            key={i} 
            skill={skill} 
            width={width}
            ref={el => (skillsRef.current[i] = el)}
            style={{
              transitionDelay: `${i >= 5 ? (i - 5) * 100 : 0}ms`,
            }}
          />
        </CSSTransition>
    ))
  );
}

const Experience = () => {
  const revealContainer = useRef(null);
  const skillsRef = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
    skillsRef.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, [prefersReducedMotion, skillsRef]);

  return (
    <ExperienceSection>
      <div id='tmp' ref={revealContainer}>
        <h2>Hello World</h2>
        <StyledList>
          <TransitionGroup>
            <SkillBars skillsRef={skillsRef}/>
          </TransitionGroup>
      </StyledList>
      </div>
    </ExperienceSection>
  )
}

export default Experience;
