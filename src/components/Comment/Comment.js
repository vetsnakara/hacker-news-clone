import React from 'react'
import PostMetaInfo from '../PostMetaInfo'

import useStyles from './styles'

const Comment = ({ comment }) => {
  const classes = useStyles()

  return (
    <div className={classes.comment}>
      <PostMetaInfo
        comment
        by={comment.by}
        time={comment.time}
        id={comment.id}
      />
      <p dangerouslySetInnerHTML={{ __html: comment.text }} />
    </div>
  )
}

export default Comment
