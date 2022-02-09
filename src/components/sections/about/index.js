import React from 'react';
import styled from '@emotion/styled';

import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useStaticQuery, graphql } from "gatsby";

import { Section }  from  '@templates';

const AboutContent = styled.div`
  .about-text {
    font-size: var(--fz-xl);
    color: var(--text2);

    ul {
      display: grid;
      grid-template-columns: repeat(2, minmax(140px, 200px));
      grid-gap: 0 10px;
      padding: 0;
      margin: 20px 0 0 0;
      overflow: hidden;
      list-style: none;
  
      li {
        position: relative;
        margin-bottom: 10px;
        padding-left: 20px;
        font-family: var(--font-mono);
        font-size: var(--fz-xs);
  
        &:before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--highlight);
          font-size: var(--fz-sm);
          line-height: 12px;
        }
      }
    }

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
    <Section heading={heading} {...props}>
      <AboutContent>
        <div className='about-text'>
          <MDXRenderer> 
            {body} 
          </MDXRenderer>
        </div>
      </AboutContent>
    </Section>
  )
}

export default About;
