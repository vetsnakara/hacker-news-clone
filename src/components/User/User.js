import React from 'react'
import queryString from 'query-string'

const User = ({ location, info, posts, fetchUser }) => {
  const { id } = queryString.parse(location.search)

  React.useEffect(() => {
    fetchUser(id)
  }, [id])

  const renderUserInfo = () =>
    info.loading ? (
      <p>Loading user info...</p>
    ) : info.error ? (
      <p>{info.error}</p>
    ) : (
      <p>User info: {JSON.stringify(info.data, null, 2)}</p>
    )

  const renderUserPosts = () =>
    posts.loading ? (
      <p>Loading user posts...</p>
    ) : posts.error ? (
      <p>{posts.error}</p>
    ) : (
      <p>User posts: {JSON.stringify(posts.data, null, 2)}</p>
    )

  return (
    <>
      {renderUserInfo()}
      {renderUserPosts()}
    </>
  )
}

export default User
