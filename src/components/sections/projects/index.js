import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Section from '@templates/section';

import Project from './project';

const Projects = (props) => {

  const [currentProject, setCurrentProject] = React.useState(0);
  const [increment, setIncrement] = React.useState(0);

  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: {fileAbsolutePath: {regex: "/projects/"}}) {
        edges {
          node {
            id
            frontmatter {
              order
              title
              github
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
    }
  `);

  const projectData = data.allMdx.edges;

  return (
    // Why true &&
    <Section heading={'Projects'} {...props}>
      {true &&
        projectData.map((edge, i) => {
          const { node } = edge;
          const { frontmatter, body } = node;
          const { order } = frontmatter;
          return (
            <Project
              key={i}
              id={order}
              totalProjects={projectData.length}
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