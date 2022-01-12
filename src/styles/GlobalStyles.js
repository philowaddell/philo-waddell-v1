import React from 'react';
import { Global, css } from '@emotion/react'
import fonts from './fonts';
import variables from './variables';

const Theme = () => {
  
  return (
    <Global
      styles={css`
      
        ${fonts};
        ${variables};

        html {
          scroll-snap-type: mandatory;
          scroll-snap-points-y: repeat(100vh);
          scroll-snap-type: y mandatory;
        }

        body {
          margin: 0px;
          font-family: var(--font-sans);
        }

        section {
          height: 100vh;
          scroll-snap-align: start;
          text-align: center;
          position: relative;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0 0 10px 0;
          font-weight: 600;
          color: var(--lightest-slate);
          line-height: 1.1;
        }

        .big-heading {
          margin: 0;
          line-height: 0.9;
          font-size: clamp(50px, 12vw, 100px);
        }
        
      `}
    />
  )
}

export default Theme;