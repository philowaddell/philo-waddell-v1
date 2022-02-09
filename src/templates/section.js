import React, { useEffect, useCallback } from 'react';
import styled from '@emotion/styled';

import { useScrollListener } from '@hooks';

import { Content }  from  '@templates';

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

const animations = {
  navForward: {
    entrance: 'slidein-bottom',
    exit: 'slideout-top',
  },
  navBackward: {
    entrance: 'slidein-top',
    exit: 'slideout-bottom',
  },
  pageLoad: 'slidein-right',
};

const Section = ({ id, heading, current, setCurrent, next, increment, setIncrement, ...props }) => {
  const [element, setElement] = React.useState();
  const [animation, setAnimation] = React.useState('none');
  const [mounted, setMounted] = React.useState(false);
  const [scrollDirection, enableScroll] = useScrollListener(element);

  const sectionRef = useCallback((node) => {
    setElement(node);
  },[]);

  // Current section updates
  useEffect(() => {
    if (current !== id ) return;
    updateAnimation();
    setMounted(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[current]);

  // Scroll triggered
  useEffect(() => {
    if ( current !== id ) return;
    if (current + scrollDirection < 0 || current + scrollDirection > 4) return enableScroll();
    setIncrement(scrollDirection);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[scrollDirection]);

  // Increment updates
  useEffect(() => {
    if ( current !== id ) return;
    if ( increment === 0 ) return;
    next.current  = current + increment;
    updateAnimation()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [increment]);


  const handleAnimationEnd = (props) => {
    const animationName = props.animationName;
    if ( current !== id ) return;
    if ( animationName === animations.pageLoad ) return handleEntranceAnimationEnd();
    if ( animationName === animations.navForward.entrance ) return handleEntranceAnimationEnd();
    if ( animationName === animations.navBackward.entrance ) return handleEntranceAnimationEnd();
    if ( animationName === animations.navForward.exit ) return handleExitAnimationEnd();
    if ( animationName === animations.navBackward.exit ) return handleExitAnimationEnd();
  };

  const handleEntranceAnimationEnd = () => {
    enableScroll();
    setIncrement(0);
  };

  const handleExitAnimationEnd = () => {
    setMounted(false)
    setCurrent(next.current);
  };

  const updateAnimation = () => {
    //console.log(`ID[${id}] : ${next.current === current} | ${increment}`)
    if (next.current === current && increment < 0) return setAnimation(animations.navBackward.entrance);
    if (next.current  === current && increment > 0) return setAnimation(animations.navForward.entrance);
    if (next.current  !== current && increment  > 0) return setAnimation(animations.navForward.exit);
    if (next.current !== current && increment < 0) return setAnimation(animations.navBackward.exit);
    if (next.current === current && increment === 0) return setAnimation(animations.pageLoad);
    return 'none';
  }

  return (
    <  >
      {
        mounted &&
        <StyledSection id={id} ref={sectionRef} animation={animation} onAnimationEnd={handleAnimationEnd}>
          <Content sectionID={id} heading={heading} >
            {props.children}
          </Content>
        </StyledSection>
      }
    </>
  )
}

export default Section;
