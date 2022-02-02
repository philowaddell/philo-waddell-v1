import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useStaticQuery, graphql } from "gatsby";

import sr from '@utils/sr';
import { srConfig } from '@config';
import { usePrefersReducedMotion } from '@hooks';

import Section from '@templates/section';
import SkillBar from "./skillbar"

const ExperienceContent = styled.div`
  padding: 0% 15%;

  .inner {
    display: grid;
    grid: 1fr 1fr / 5fr 4fr;

    ul {
      grid-area: 1 / 2 / 3 / 3;
      padding: 0px;
      margin: 0px 0px 0px 40px;
      list-style-type: none;

      li {
        margin-left: 0px;
      }

    }

    .experience-text {
      font-size: var(--fz-md);
      color: var(--text2);
    }

  }
`;

const Experience = (props) => {

  const data = useStaticQuery(graphql`
    query {
      allMdx( filter: {fileAbsolutePath: {regex: "/experience/"}} ) {
        nodes {
          id
          frontmatter {
            heading
            skills
          }
          body
        }
      }
    }
  `);

  const { frontmatter, body } = data.allMdx.nodes[0];
  const { heading, skills } = frontmatter;
  const skillsJson = Object.fromEntries(skills.map(s => s.split(',')));

  return (
    <Section {...props}>
      <ExperienceContent>
        <h2 className="numbered-heading">{heading}</h2>
        <div className='inner'>
          <div  className='experience-text'>
            <MDXRenderer> 
              {body} 
            </MDXRenderer>
          </div>
          <ul>
             {
                Object.entries(skillsJson).map(([skill, width], i) => (
                  <SkillBar 
                    key={i} 
                    transitionDelay={1000}
                    skill={skill} 
                    width={width}
                  />
                ))
              }
          </ul>
        </div>
      </ExperienceContent>
    </Section>
  )
}

export default Experience;
