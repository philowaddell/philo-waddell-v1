import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Section from '@templates/section';

import Project from './project';

const Projects = (props) => {

  const [currentProject, setCurrentProject] = React.useState(0);
  const [increment, setIncrement] = React.useState(0);

  const data = useStaticQuery(graphql`
    query {
      allMdx( filter: {fileAbsolutePath: {regex: "/projects/"}} ) {
        nodes {
          id
          frontmatter {
            order
            title
            link
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            image_alt
            tech
          }
          body
        }
      }
    }
  `);

  const projectData = data.allMdx.nodes;

  return (
    // Why true &&
    <Section {...props}>
      {true &&
        projectData.map((node, i) => {
          const { frontmatter, body } = node;
          const { order } = frontmatter;
          return (
            <Project
              key={i}
              id={order}
              data={{ ...frontmatter, body }}
              current={currentProject}
              setCurrent={setCurrentProject}
              increment={increment}
              setIncrement={setIncrement}
            />
          )
        })}
    </Section>
  )
}

export default Projects;