import React from 'react'
import PostMetaInfo from '../PostMetaInfo'
import Title from '../Title'

import useStyles from './styles'

const PostsList = ({ posts }) => {
  const classes = useStyles()

  if (posts.length === 0) {
    return (
      <p className='center-text'>
        This user hasn't posted yet
      </p>
    )
  }

  return (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id} className={classes.post}>
            <Title url={post.url} title={post.title} id={post.id} />
            <PostMetaInfo
              by={post.by}
              time={post.time}
              id={post.id}
              descendants={post.descendants}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default PostsList
