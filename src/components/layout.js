import React, { useState, useEffect } from 'react';
import { Global, css } from '@emotion/react'

import ThemeProvider from '@styles/ThemeProvider';

const Layout = ( {current, children} ) => {

  return (
    <>
      <div id="root">
        <ThemeProvider current={current}>
          {children}
        </ThemeProvider>
      </div>
    </>
  );
}

export default Layout;