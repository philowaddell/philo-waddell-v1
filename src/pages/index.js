import React, { useEffect } from 'react';
import { useDeviceDetect } from "@hooks";
import DesktopSite from './desktop';
import MobileSite from './mobile';


const IndexPage = () => {
  const { isMobile } = useDeviceDetect();
  
  return (
    <>
    {
      isMobile != undefined && isMobile &&
      <MobileSite/>
    }
    {
      isMobile != undefined && !isMobile &&
      <DesktopSite/>
    }
    </>
  );
}

export default IndexPage