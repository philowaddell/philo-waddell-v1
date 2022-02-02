import React from 'react';
import { keyframes } from "@emotion/react"
import styled from '@emotion/styled'

const SkillNameText = styled.h5`
  color: var(--primary2);
  margin: 0px;
  min-width: 130px;
`;

const StyledListItem = styled.li`
  display: flex;
  margin: 5px 20px 5px 20px;
  animation: fadeInUp 500ms 1500ms cubic-bezier(0.645, 0.045, 0.355, 1) 1 both;
`;

const grow = (width) => keyframes`
  from { width: 0px; }
  to { width: ${width}%; }
`

const SkillBar = React.forwardRef(( { transitionDelay, skill, width } ) => {
  return (
    <StyledListItem transitionDelay={transitionDelay}>
      <SkillNameText>{skill}</SkillNameText>
      <div className='skill-bar-outer' css={{display: 'flex', flexGrow: 1}}>
        <div className='skill-bar-inner' css={{
            background: 'var(--primary2)',
            width: '0px',
            height: '10px',
            borderRadius: '10px / 10px',
            alignSelf: 'center',
            animation: `${grow(width)} 2s 2000ms ease-in-out 1 forwards`,
          }}/>
      </div>
    </StyledListItem>
  )
});

export default SkillBar;
