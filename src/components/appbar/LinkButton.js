import React from 'react'
import { Typography } from '@mui/material';

const LinkButton = (props) => {
  const { pageName } = props;

  return (
    <div id={`${pageName}-link-button`}>
      <a href={`#${pageName}`}>
        <Typography variant="h3">
          {pageName}
        </Typography>
      </a>
    </div>
  )
}

export default LinkButton