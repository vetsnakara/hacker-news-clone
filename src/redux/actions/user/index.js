import { fetchUserInfo } from './info'
import { fetchUserPosts } from './posts'

export const fetchUser = userId => async (dispatch, getState) => {
  const {
    user: { info }
  } = getState()

  if (info.data && info.data.id === userId) {
    return
  }

  const { submitted: postIds } = await dispatch(fetchUserInfo(userId))
  await dispatch(fetchUserPosts(postIds.slice(0, 30)))
}

export * from './info'
export * from './posts'
