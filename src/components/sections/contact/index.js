import React from 'react';
import styled from '@emotion/styled';

import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useStaticQuery, graphql } from "gatsby";

import { Section }  from  '@templates';
import { contactDetails } from "@config";

const ContactContent = styled.div`

  display: grid;
  justify-items: center;

  .contact-heading {
    font-size: clamp(20px, 12vw, 50px);
  }

  .contact-text {
    width: 320px;
    font-size: var(--fz-xl);
    color: var(--text2);
    text-align: center;
  }

  .contact-button {
    width: 140px;
    height: 60px;
    margin: 20px;
  }

`;

const Contact = (props) => {

  const data = useStaticQuery(graphql`
    query {
      allMdx( filter: {fileAbsolutePath: {regex: "/contact/"}} ) {
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

  const mailLink = React.useRef('');

  const handleContactClicked = () => {
    mailLink.current = `mailto:${atob(contactDetails.email)}?subject=${atob(contactDetails.subject)}` || '';
    window.location.href = mailLink.current;
  }

  return (
    <Section {...props}>
      <ContactContent>
        <h1 className='contact-heading'>{heading}</h1>
        <div className='contact-text'>
          <MDXRenderer> 
            {body} 
          </MDXRenderer>
        </div>
        <button
          className='smallButton contact-button'
          onClick={handleContactClicked}
          >
          Say Hello
        </button>
      </ContactContent>
    </Section>
  )
}

export default Contact;
