import React from 'react';
import { Global, css } from '@emotion/react'
import fonts from './fonts';
import variables from './variables';
import TransitionStyles from './TransitionStyles';

const GlobalStyles = ( {colours} ) => {


  
  return (
    <Global
      styles={css`
      
        ${fonts};
        ${variables};
        ${TransitionStyles};

        :root {
          --primary1: ${colours.primary1};
          --primary2: ${colours.primary2};
          --text1: ${colours.text1};
          --text2: ${colours.text2};
          --highlight: ${colours.highlight};
          --tint: ${colours.tint};
          --shadow: ${colours.shadow};
        }

        html {
          height: 100%;
          overflow: hidden;
        }

        body {
          margin: 0px;
          font-family: var(--font-sans);
          background: var(--primary1);
          transition: background 2s ease;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0 0 10px 0;
          font-weight: 600;
          color: var(--text1);
          line-height: 1.1;
        }

        p {
          margin: 0 0 15px 0;
      
          &:last-child,
          &:last-of-type {
            margin: 0;
          }
        }
        
        a {
          display: inline-block;
          text-decoration: none;
          text-decoration-skip-ink: auto;
          color: var(--highlight);
          position: relative;
          transition: var(--transition);
      
          &:hover {
            color: var(--highlight);
          }
      
          &.inline-link {
            
          }
        }
        
        #root {
          height: 100vh;
          display: grid;
          grid: 1fr 8fr 1fr / 1fr 8fr 1fr;
        }

        .big-heading {
          margin: 0;
          line-height: 0.9;
          font-size: clamp(57px, 12vw, 100px);
        }

        .smallButton {
          color: var(--highlight);
          background-color: transparent;
          border: 1px solid var(--highlight);
          border-radius: var(--border-radius);
          padding: 0.75rem 1rem;
          margin-right: 15px;
          font-size: var(--fz-xs);
          font-family: var(--font-mono);
          line-height: 1;
          text-decoration: none;
          cursor: pointer;
          transition: var(--transition);
          &:hover,
          &:focus {
            background-color: var(--tint);
            outline: none;
          }
          &:after {
            display: none !important;
          }
        }

      `}
    />
  )
}

export default GlobalStyles;