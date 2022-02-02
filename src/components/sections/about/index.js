import React from 'react';
import styled from '@emotion/styled';

import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useStaticQuery, graphql } from "gatsby";

import Section from  '@templates/section';

const AboutContent = styled.div`
  padding: 0% 15%;

  .about-text {
    font-size: var(--fz-md);
    color: var(--text2);
  }

`;

const About = (props) => {

  const data = useStaticQuery(graphql`
    query {
      allMdx( filter: {fileAbsolutePath: {regex: "/about/"}} ) {
        nodes {
          id
          frontmatter {
            heading
          }
          body
        }
      }
    }
  `);

  const { frontmatter, body } = data.allMdx.nodes[0];
  const { heading } = frontmatter;
  
  return (
    <Section {...props}>
      <AboutContent>
        <h2 className="numbered-heading">{heading}</h2>
        <div className='inner'>
          <div className='about-text'>
            <MDXRenderer> 
              {body} 
            </MDXRenderer>
          </div>
        </div>
      </AboutContent>
    </Section>
  )
}

export default About;
