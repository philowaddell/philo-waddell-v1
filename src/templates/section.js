import React, { useEffect, useRef, useCallback } from 'react';
import styled from '@emotion/styled';

import { usePrevious, useScrollListener } from '@hooks';

const StyledSection = styled.section`
  id: ${props => props.id ? props.id : undefined};
  display: flex;
  flex-direction: column;
  grid-area: 1 / 1 / -1 / -1;
  height: 100%;
  width: 100%;
  justify-content: center;
  animation: ${props => props.animation} 1s ease forwards;
`;

const Section = ({ id, current, setCurrent, next, increment, setIncrement, ...props }) => {
  const [element, setElement] = React.useState();
  const previous = usePrevious(current);
  // Maybe should be ref?
  const [animation, setAnimation] = React.useState('none');
  const [mounted, setMounted] = React.useState(false);
  const [scrollDirection, enableScroll] = useScrollListener(element);

  const sectionRef = useCallback((node) => {
    setElement(node);
  }, [mounted]);

  // Current section updates
  useEffect(() => {
    if (current !== id ) return;
    updateAnimation();
    setMounted(true);
  },[current]);

  // Scroll triggered
  useEffect(() => {
    if ( current !== id ) return;
    if (current + scrollDirection < 0 || current + scrollDirection > 4) return enableScroll();
    setIncrement(scrollDirection);
  },[scrollDirection]);

  // Increment updates
  useEffect(() => {
    if ( current !== id ) return;
    if ( increment === 0 ) return;
    next.current  = current + increment;
    updateAnimation()
  }, [increment]);


  const handleAnimationEnd = (props) => {
    console.log(props)
    if ( current !== id ) return;
    if ( current === next.current ) {
      enableScroll();
      setIncrement(0);
    } else {
      setMounted(false)
      setCurrent(next.current);
    }
  };

  const updateAnimation = () => {
    //console.log(`ID[${id}] : ${next.current === current} | ${increment}`)
    if (next.current === current && increment < 0) return setAnimation('slidein-top');
    if (next.current  === current && increment > 0) return setAnimation('slidein-bottom');
    if (next.current  !== current && increment  > 0) return setAnimation('slideout-top');
    if (next.current !== current && increment < 0) return setAnimation('slideout-bottom');
    if (next.current === current && increment === 0) return setAnimation('slidein-right');
    return 'none';
  }

  return (
    <  >
      {
        mounted &&
        <StyledSection ref={sectionRef} animation={animation} onAnimationEnd={handleAnimationEnd}>
          {props.children}
        </StyledSection>
      }
    </>
  )
}

export default Section;
