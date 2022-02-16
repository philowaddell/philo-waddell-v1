import React from 'react';
import { useDeviceDetect } from "@hooks";
import DesktopSite from './desktop';
import MobileSite from './mobile';


const IndexPage = () => {
  const { isMobile } = useDeviceDetect();
  
  return (
    <>
    {
      isMobile &&
      <MobileSite/>
    }
    {
      !isMobile &&
      <DesktopSite/>
    }
    </>
  );
}

export default IndexPage