import React from 'react';
import styled from '@emotion/styled';

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const StyledImage = styled.div`
  position: relative;

  .wrapper {
    z-index: 0;
    display: inline-flex;
    position: relative;
    border-radius: var(--border-radius);
    //background-color: var(--highlight);

    &:hover,
    &:focus {
      background: transparent;

      .image {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .image {
      z-index: -1;
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
      top: 0;
      left: 0;
      background-color: var(--primary1);
      mix-blend-mode: screen;
    }
  }
`;

const Image = ( { image, alt }) => {

  return (
    <StyledImage>
      <div className="wrapper">
      <GatsbyImage
        className="image"
        image={getImage(image)}
        alt={alt || ""}
      />
      </div>
    </StyledImage>
  );

};

export default Image;