import React, { useEffect } from "react";

import styled from '@emotion/styled';

const StyledButton = styled.button`
  animation: ${props => props.animation || 'none' } 1000ms ease both;
`;

const ResumeButton = ( { current, visible, setVisible } ) => {

  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    if ( current === 0 ) return setVisible(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  useEffect(() => {
    if ( visible ) return setMounted(true);
  }, [visible]);

  const handleClick = () => {

  };

  const getAnimation = () => {
    if ( mounted && visible ) return 'fadeInUp';
    if ( mounted && !visible ) return 'fadeOutDown';
    return 'none';
  }

  const handleAnimationEnd = (props) => {
    if ( current === 0 ) {
      setMounted(false);
      setVisible(false);
    }
  }

  return (
    <>
      { 
        mounted &&
        <StyledButton 
          className='smallButton resume-button' 
          animation={getAnimation} 
          onAnimationEnd={handleAnimationEnd}
          onClick={handleClick}
        >
          Resume
        </StyledButton>
      }
    </>
  );
};

export default ResumeButton;