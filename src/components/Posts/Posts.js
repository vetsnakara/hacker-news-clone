import React from 'react'

import Loading from '../Loading'
import PostsList from '../PostsList'

const Posts = ({ type, posts, loading, error, fetchPosts }) => {
  React.useEffect(() => {
    fetchPosts(type)
  }, [type])

  return loading ? (
    <Loading text={`Loading ${type} posts`} />
  ) : error ? (
    <p>{error}</p>
  ) : (
    <PostsList posts={posts} />
  )
}

export default Posts
