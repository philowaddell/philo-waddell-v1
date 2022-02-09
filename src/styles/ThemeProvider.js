import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react'
import GlobalStyles from '@styles/GlobalStyles';


const darkBlue = {
  primary1: '#020c1b',                // Dark Navy
  primary2: '#112240',                // Light navy
  text1: '#ccd6f6',                   // Lightest slate
  text2: '#a8b2d1',                   // Light slate
  highlight: '#64ffda',               // Green
  tint: 'rgba(100, 255, 218, 0.1)',   // Green tint
  shadow: 'rgba(2, 12, 27, 0.7)',     // Dark navy shadow
};
const red = {
  primary1: '#d2404f',                // Indian red
  primary2: '#dd6c73',                // Light coral
  text1: '#fcefbd',                   // Darker Brisque
  text2: '#e9abaf',                   // Light Pink
  highlight: '#ccd6f6',               // Green
  tint: 'rgba(78, 246, 240, 0.1)',   // Teal tint
  shadow: 'rgba(210, 64, 79, 0.7)',   // Indian red shadow
};

const paleBlue = {
  primary1: '#e3f0ff',                // Lavender
  primary2: '#a2a8ea',                // Light steel blue
  text1: '#434690',                   // Dark slate blue
  text2: '#a1acd1',                   // Dark steel Blue
  highlight: '#ff9eab',               // Pink
  tint: 'rgba(249, 195, 202, 0.1)',    // Pink tint
  shadow: 'rgba(227, 240, 255, 0.7)', // Lavender Shadow
};

//const themes = [darkBlue, red, paleBlue];
const themes = [darkBlue];
const defaultTheme = themes[0];

const ThemeProvider = ( { current, children } ) => {

  const [colours, setColours] = React.useState(defaultTheme);

  useEffect(() => {
    setColours(themes[current] || defaultTheme)
  },[current]);

  return (
    <>
      <GlobalStyles colours={colours}/>
      {children}
    </>
  )
}

export default ThemeProvider;
