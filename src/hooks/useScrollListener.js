import React, { useEffect, useRef } from 'react';

const useScrollListener = (element) => {
  const [scrollDirection, setScrollDirection] =  React.useState(0);
  const scrollEnabled = useRef(false);

  useEffect(() => {

    const onWheelHandler = (e) => {
      if ( e.deltaY === 0 ) return;
      if ( scrollEnabled.current ) {
        disableScroll();
        setScrollDirection(Math.sign(e.deltaY));
      }
    };
  
    if( !element ) return;
    element.addEventListener('wheel', onWheelHandler);
    
  }, [element]);

  const enableScroll = () => {
    setScrollDirection(0);
    scrollEnabled.current = true;
  };

  const disableScroll = () => {
    scrollEnabled.current = false;
  };

  return [scrollDirection, enableScroll];
};

export default useScrollListener;