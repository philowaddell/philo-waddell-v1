import React from 'react';
import { keyframes } from "@emotion/react"
import styled from '@emotion/styled'

const SkillNameText = styled.h4`
  color: white;
  margin: 0px;
  min-width: 130px;
`;

const StyledListItem = styled.li`
  display: flex;
  margin: 5px 20px 5px 20px;
`;

const grow = (width) => keyframes`
  from { width: 0px; }
  to { width: ${width}%; }
`

const SkillBar = React.forwardRef(({ skill, width }, ref) => {
  return (
    <StyledListItem ref={ref}>
      <SkillNameText>{skill}</SkillNameText>
      <div className='skill-bar-outer' css={{display: 'flex', flexGrow: 1}}>
        <div className='skill-bar-inner' css={{
            background: 'white',
            width: '0px',
            height: '10px',
            borderRadius: '10px / 10px',
            alignSelf: 'center',
            animation: `${grow(width)} 3s 1.5s ease-in-out 1 forwards`,
          }}/>
      </div>
    </StyledListItem>
  )
});

export default SkillBar;
