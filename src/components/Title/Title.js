import React from 'react'
import { Link } from 'react-router-dom'

import useStyles from './styles'

const Title = ({ url, title, id }) => {
  const classes = useStyles()

  return url
    ? (
      <a
        className={classes.link}
        href={url}
        target='_blank' rel='noopener noreferrer'
      >
        {title}
      </a>
    ) : (
      <Link className={classes.link} to={`/post?id=${id}`}>{title}</Link>
    )
}

export default Title
