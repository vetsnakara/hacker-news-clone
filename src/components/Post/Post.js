import React from 'react'
import queryString from 'query-string'

import Loading from '../Loading'
import Title from '../Title'
import PostMetaInfo from '../PostMetaInfo'
import Comment from '../Comment'

import useStyles from './styles'

const Post = ({
  location,
  info,
  comments,
  fetchPost
}) => {
  const classes = useStyles()
  const { id } = queryString.parse(location.search)

  React.useEffect(() => {
    fetchPost(id)
  }, [id])

  const renderPostInfo = ({
    data,
    error,
    loading
  }) => {
    if (loading === true || !data) {
      return <Loading text='Fetching post' />
    }

    const { url, title, id, by, time, descendants, text } = data

    return (
      <>
        <h1 className='header'>
          <Title url={url} title={title} id={id} />
        </h1>
        <PostMetaInfo
          by={by}
          time={time}
          id={id}
          descendants={descendants}
        />
        <p className={classes.text} dangerouslySetInnerHTML={{ __html: text }} />
      </>
    )
  }

  const renderPostComments = ({
    data,
    error,
    loading
  }) => {
    if (loading === true) {
      return <Loading text='Fetching comments' />
    }

    if (data.length === 0) {
      return <p>No comments yet</p>
    }

    return (
      <>
        {data.map((comment) =>
          <Comment
            key={comment.id}
            comment={comment}
          />
        )}
      </>
    )
  }

  return (
    <>
      {renderPostInfo(info)}
      {renderPostComments(comments)}
    </>
  )
}

export default Post
