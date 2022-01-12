import React from 'react'

const Button = (props) => {
  const { pageName } = props;

  return (
    <div id={`${pageName}-link-button`}>
      <a href={`#${pageName}`}>
        {pageName}
      </a>
    </div>
  )
}

export default Button