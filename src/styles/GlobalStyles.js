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
          color: inherit;
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

        .numbered-heading {
          display: flex;
          align-items: center;
          position: relative;
          margin: 10px 0 40px;
          width: 100%;
          font-size: clamp(26px, 5vw, var(--fz-heading));
          white-space: nowrap;
      
          &:before {
            position: relative;
            bottom: 4px;
            counter-increment: section;
            content: '0' counter(section) '.';
            margin-right: 10px;
            color: var(--green);
            font-family: var(--font-mono);
            font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
            font-weight: 400;
      
            @media (max-width: 480px) {
              margin-bottom: -3px;
              margin-right: 5px;
            }
          }
      
          &:after {
            content: '';
            display: block;
            position: relative;
            top: -5px;
            width: 100%;
            height: 1px;
            margin-left: 20px;
            background-color: var(--text1);
          }
        }

      `}
    />
  )
}

export default GlobalStyles;