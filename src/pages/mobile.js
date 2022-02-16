import React from 'react';
import styled from '@emotion/styled';
import ThemeProvider from '@styles/ThemeProvider';

import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useStaticQuery, graphql } from "gatsby";

import { contactDetails } from "@config";

const ContactContent = styled.div`

  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;

  .contact-heading {
    font-size: clamp(20px, 12vw, 50px);
    line-height: 30px;
  }

  .contact-subheading {
    color: var(--highlight);
    font-weight: 100;
    font-size: var(--fz-xl);
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
      allMdx( filter: {fileAbsolutePath: {regex: "/mobile/"}} ) {
        nodes {
          id
          frontmatter {
            heading
            subheading
          }
          body
        }
      }
    }
  `);

  const { frontmatter, body } = data.allMdx.nodes[0];
  const { heading, subheading } = frontmatter;

  const mailLink = React.useRef('');

  const handleContactClicked = () => {
    mailLink.current = `mailto:${atob(contactDetails.email)}?subject=${atob(contactDetails.subject)}` || '';
    window.location.href = mailLink.current;
  }

  return (
      <ThemeProvider>
        <ContactContent>
          <h1 className='contact-heading'>{heading}</h1>
          <h2 className='sub-heading contact-subheading'>{subheading}</h2>
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
        </ThemeProvider>
  )
}

export default Contact;
