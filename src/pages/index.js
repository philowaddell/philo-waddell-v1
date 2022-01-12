import React from 'react';
import Theme from "@styles/GlobalStyles";

import { Nav, Home, About, Experience, Projects, Contact } from '@components';

const IndexPage = () => {
  return (
    <>
      <Nav/>
      <div className='scroll-port'>
        <Theme/>
        <Home/>
        <About/>
        <Projects/>
        <Experience/>
        <Contact/>
      </div>
    </>
  )
}

export default IndexPage