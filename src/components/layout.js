import React from 'react';

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