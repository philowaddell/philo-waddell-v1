import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import styled from "@mui/styled-engine";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Typography } from '@mui/material';

const StyledCard = styled(Card)`
  transition: all 1s ease;
  background: "#f2f2f2" ;
  &:hover {
    background: "#333";
    transform: scale(1.5);
  }
`;

const DisplayCard = ( { title, link, image, imageAlt, body }) => {

  const handleButtonClick = () => {
    window.open(link); 
  }

  return (
    <StyledCard id={`${title}-display-card`} sx={{ maxWidth: 360, minHeight: 550 }}>
      <CardHeader title={title}/>
        <GatsbyImage
        image={getImage(image)}
        alt={imageAlt}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <MDXRenderer>
            {body}
          </MDXRenderer>
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton color="secondary" aria-label="github link" onClick={handleButtonClick} component="span">
            <GitHubIcon />
        </IconButton>
      </CardActions>
    </StyledCard>
  )
}

export default DisplayCard