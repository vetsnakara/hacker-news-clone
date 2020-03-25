import { fetchPostInfo } from './info'
import { fetchPostComments } from './comments'

export * from './info'
export * from './comments'

export const fetchPost = postId => async (dispatch, getState) => {
  const {
    post: { info }
  } = getState()

  if (info.data && String(info.data.id) === postId) {
    return
  }

  const { kids } = await dispatch(fetchPostInfo(postId))

  await dispatch(fetchPostComments(kids))
}
