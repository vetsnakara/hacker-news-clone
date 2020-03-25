import React from 'react'
import queryString from 'query-string'

import { formatDate } from '../../utils/helpers'

import Loading from '../Loading'
import PostsList from '../PostsList'

import useStyles from './styles'

const User = ({
  location,
  info,
  posts,
  fetchUser
}) => {
  const classes = useStyles()
  const { id } = queryString.parse(location.search)

  React.useEffect(() => {
    fetchUser(id)
  }, [id])

  const renderInfo = ({
    data,
    loading,
    error
  }) => {
    if (loading === true || !data) {
      return <Loading text='Fetching User' />
    }

    const { id, created, karma, about } = data

    return (
      <>
        <h1 className='header'>{id}</h1>
        <div className={classes.metaInfo}>
          <span>joined <b>{formatDate(created)}</b></span>
          <span>has <b>{karma.toLocaleString()}</b> karma</span>
        </div>
        <p className={classes.text} dangerouslySetInnerHTML={{ __html: about }} />
      </>
    )
  }

  const renderPosts = ({
    data,
    loading,
    error
  }) => loading === true
    ? <Loading text='Fetching posts' />
    : (
      <>
        <h2>Posts</h2>
        <PostsList posts={data} />
      </>
    )

  return (
    <>
      {renderInfo(info)}
      {renderPosts(posts)}
    </>
  )
}

export default User
