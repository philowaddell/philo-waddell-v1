import React, { useEffect } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from '@emotion/styled';

import { Image } from '@templates';

const StyledProject = styled.div`

  display: grid;
  grid: 1fr /  repeat(6, 1fr);
  height: 380px;
  animation: ${props => props.animation} 1s ease forwards;

  .project-image {
    z-index: 1;
    grid-area: 1 / 4 / 1 / 7;
    align-self: center;
  }

  .project-content {

    z-index: 2;

    grid-area: 1 / 1 / 1 / 5;
    text-align: left;
    align-self: center;

    .project-title {
      margin: 0px 0px 20px;
      font-size: clamp(24px, 5vw, 28px);
      color: var(--text1);
    }
  
    .project-description {
      padding: 25px;
      font-size: var(--fz-md);
      color: var(--text2);
      background-color: var(--primary2);
      border-radius: var(--border-radius);
    }

    .box-shadow {
      box-shadow: 0 10px 30px -15px var(--shadow);
      transition: var(--transition);
  
      &:hover,
      &:focus {
        box-shadow: 0 20px 30px -15px var(--shadow);
      }
    }

    .project-tech-list {
      display: flex;
      flex-wrap: wrap;
      position: relative;
      z-index: 2;
      margin: 25px 0 10px;
      padding: 0;
      list-style: none;
  
      li {
        margin: 0 20px 5px 0;
        color: var(--text2);
        font-family: var(--font-mono);
        font-size: var(--fz-xs);
        white-space: nowrap;
      }
  
      @media (max-width: 768px) {
        margin: 10px 0;
  
        li {
          margin: 0 10px 5px 0;
          color: var(--text1);
        }
      }
    }

  }
`;

const Project = ({ id, totalProjects, data, current, setCurrent, increment, setIncrement }) => {
  const [mounted, setMounted] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const { title, body, github, image, imageAlt, tech } = data;

  useEffect(() => {
    if ( current === id ) {
      setVisible(true);
      setMounted(true);
    }
  },[current, id]);

  const nextClicked = () => {
    setVisible(false);
    setIncrement(1);
  };

  const prevClicked = () => {
    setVisible(false);
    setIncrement(-1);
  };

  const unmount = () => {
    if ( visible ) return setIncrement(0);
    setMounted(false);
    setCurrent(prev => prev + increment);
  };

  const getAnimation = () => {
    if ( visible && increment === 1 ) return 'slidein-right';
    if ( !visible && increment === 1 ) return 'slideout-left';
    if ( !visible && increment === -1 ) return 'slideout-right';
    if ( visible && increment === -1 ) return 'slidein-left';
    return 'none';
  }

  return (
    <>
      { 
        mounted && 
        <StyledProject animation={getAnimation} onAnimationEnd={() => unmount()}>
          <div className='project-content'>
            <h3 className='project-title'>{title}</h3>
            <div className='project-description box-shadow'>
              <MDXRenderer> 
                {body} 
              </MDXRenderer>
            </div>
            <ul className='project-tech-list'>
              {tech && tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <div className='project-links'>

            </div>
            <div className='project-nav'>
              { 
                current > 0 &&
                <button className='smallButton' onClick={() => prevClicked()}>Prev</button>
              }
              { 
                current < totalProjects - 1 &&
                <button className='smallButton' onClick={() => nextClicked()}>Next</button>
              }
            </div>        
          </div>
          <div className='project-image'>
            <Image 
              image={image}
              alt={imageAlt}
            />
          </div>
        </StyledProject>
      }
    </>
  )
}

export default Project;