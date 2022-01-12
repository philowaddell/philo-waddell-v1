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
          font-family: sans-serif;
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

        h1 {
          margin: 0px;
          color: blue;
        }
        
      `}
    />
  )
}

export default Theme;