import React from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../../utils/helpers'

import useStyles from './styles'

const PostMetaInfo = ({
  by,
  time,
  id,
  descendants
}) => {
  const classes = useStyles()

  return (
    <div className={classes.metaInfo}>
      <span>by <Link to={`/user?id=${by}`}>{by}</Link></span>
      <span>on {formatDate(time)}</span>
      {typeof descendants === 'number' && (
        <span>
          with <Link to={`/post?id=${id}`}>{descendants}</Link> comments
        </span>
      )}
    </div>
  )
}

export default PostMetaInfo
