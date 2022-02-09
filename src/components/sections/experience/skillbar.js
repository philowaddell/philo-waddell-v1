import React from 'react';
import { keyframes } from "@emotion/react"
import styled from '@emotion/styled'

const SkillListItem = styled.li`
  display: flex;
  margin: 15px 20px 15px 20px;
  animation: fadeInUp 500ms ${props => props.transitionDelay || '1500'}ms ease 1 both;

  .skill-title {
    color: var(--highlight);
    font-family: var(--font-mono);
    margin: 0px;
    min-width: 130px;
  }

  .skill-bar-outer {
    display: flex;
    flex-grow: 1;

    .skill-bar-inner {
      background: var(--highlight);
      width: 0px;
      height: 2px;
      border-radius: 10px / 10px;
      align-self: center;
      animation: ${props => grow(props.width)} 1s ${props => props.transitionDelay + 500}ms cubic-bezier(0.27, 0.63, 0.36, 1) 1 forwards;
    }

  }

  .skill-percent {
    font-size: var(--fz-md);
    color: var(--highlight);
  }

`;

const grow = (width) => keyframes`
  from { width: 0px; }
  to { width: ${width}%; }
`

const SkillBar = ( { transitionDelay, skill, width } ) => {

  // const [clientWidth, skillBarRef] = useStateRef(node => (node?.clientWidth || 0));

  // useEffect(() => {
  //   console.log(`the new clientHeight is: ${clientWidth}`);
  // }, [clientWidth])

  return (
    <SkillListItem transitionDelay={transitionDelay} width={width}>
      <h5 className='skill-title'>{skill}</h5>
      <div className='skill-bar-outer'>
        <div 
          className='skill-bar-inner' 
          // ref={skillBarRef} 
        />
      </div>
      {/* <p className='skill-percent'>{`${percentage}%`}</p> */}
    </SkillListItem>
  )
};

export default SkillBar;
