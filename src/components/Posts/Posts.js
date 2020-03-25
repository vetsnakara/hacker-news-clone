import React from 'react'

const Posts = ({ type, posts, loading, error, fetchPosts }) => {
  React.useEffect(() => {
    fetchPosts(type)
  }, [type])

  const renderPosts = posts => (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{JSON.stringify(post, null, 2)}</li>
      ))}
    </ul>
  )

  return loading ? (
    <p>Loading ...</p>
  ) : error ? (
    <p>{error}</p>
  ) : (
    renderPosts(posts)
  )
}

export default Posts
