import React from 'react';

import { MDXRenderer } from 'gatsby-plugin-mdx'
import { useStaticQuery, graphql } from "gatsby";

import { Section }  from  '@templates';
import { contactDetails } from "@config";

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

  const decodeLink = () => {
    mailLink.current = `mailto:${atob(contactDetails.email)}?subject=${atob(contactDetails.subject)}` || '';
  }

  return (
    <Section heading={heading} {...props}>
      <MDXRenderer> 
        {body} 
      </MDXRenderer>
      <a
        className='smallButton'
        href={`${mailLink.current}`}
        // href='mailto:email@server.com?subject=My subject line'
        onFocus={decodeLink}
        >
        Say Hello
      </a>
    </Section>
  )
}

export default Contact;
