import React from "react";
import styled from "@emotion/styled";

import { MDXRenderer } from "gatsby-plugin-mdx";
import { useStaticQuery, graphql } from "gatsby";

import { Section, Image } from "@templates";
import SkillBar from "./skillbar";

const ExperienceContent = styled.div`

  display: grid;
  grid: auto / 5fr 4fr;

  .experience-skills {
    grid-area: 1 / 2 / 3 / 3;

    .skills-heading {
      font-family: var(--font-mono);
      padding-bottom: 15px;
      color: var(--highlight);

      &:after {
        content: '';
        display: block;
        position: relative;
        bottom: -10px;
        width: 100%;
        height: 1px;
        background-color: var(--highlight);
      }

    }

    ul {
      display: flex;
      flex-direction: column;
      padding: 0px;
      margin: 0px 0px 0px 40px;
      list-style-type: none;
  
      li {
        margin-left: 0px;
      }

    }

  }

  .experience-text {
    font-size: var(--fz-xl);
    color: var(--text2);
  }

  .experience-tools {
    grid-area: 2 / 1 / 3 / 2;
    display: grid;
    grid: auto / repeat(5, 1fr);
    align-items: center;
    justify-content: center;
    
    .tool-logo { 
      justify-self: center;
      padding: 10px 10px 0px 10px;
    }
  }

`;

const Experience = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/experience/" } }) {
        nodes {
          id
          frontmatter {
            heading
            skills
            tools {
              childImageSharp {
                gatsbyImageData(width: 60, quality: 80, layout: CONSTRAINED)
              }
            }
          }
          body
        }
      }
    }
  `);

  const { frontmatter, body } = data.allMdx.nodes[0];
  const { heading, skills, tools } = frontmatter;
  const skillsJson = Object.fromEntries(skills.map((s) => s.split(",")));

  return (
    <Section heading={heading} {...props}>
      <ExperienceContent>
          <div className="experience-text">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
          <div className="experience-skills">
            <ul>
              <h3 className="skills-heading">Languages</h3>
              {Object.entries(skillsJson).map(([skill, width], i) => (
                <SkillBar
                  key={i}
                  transitionDelay={1500}
                  skill={skill}
                  width={width}
                />
              ))}
            </ul>
          </div>
          <div className="experience-tools">
            {tools.map((image, i) => (
              <div className="tool-logo" key={i}>
                <Image key={i} image={image} />
              </div>
            ))}
          </div>
      </ExperienceContent>
    </Section>
  );
};

export default Experience;
