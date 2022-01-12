import React from 'react';
import Theme from "@styles/GlobalStyles";

import { About, Experience, Projects } from '@components';

const IndexPage = () => {
  return (
    <div className='scroll-port'>
      <Theme/>
      <About/>
      <Experience/>
      <Projects/>
    </div>
  )
}

export default IndexPage