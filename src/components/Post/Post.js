import React from 'react'
import queryString from 'query-string'

const Post = ({ location, info, comments, fetchPost }) => {
  const { id } = queryString.parse(location.search)

  React.useEffect(() => {
    fetchPost(id)
  }, [id])

  const renderPostInfo = () =>
    info.loading ? (
      <p>Loading post info...</p>
    ) : info.error ? (
      <p>{info.error}</p>
    ) : (
      <p>Post info: {JSON.stringify(info.data, null, 2)}</p>
    )

  const renderPostComments = () =>
    comments.loading ? (
      <p>Loading post comments...</p>
    ) : comments.error ? (
      <p>{comments.error}</p>
    ) : (
      <p>Post comments: {JSON.stringify(comments.data, null, 2)}</p>
    )

  return (
    <>
      {renderPostInfo()}
      {renderPostComments()}
    </>
  )
}

export default Post
