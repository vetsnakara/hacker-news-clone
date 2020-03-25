import * as api from '../../../api'

export const FETCH_USER_POSTS_START = 'FETCH_USER_POSTS_START'
export const FETCH_USER_POSTS_SUCCESS = 'FETCH_USER_POSTS_SUCCESS'
export const FETCH_USER_POSTS_FAILURE = 'FETCH_USER_POSTS_FAILURE'

const fetchUserPostsStart = () => ({
  type: FETCH_USER_POSTS_START
})

const fetchUserPostsSuccess = data => {
  return {
    type: FETCH_USER_POSTS_SUCCESS,
    payload: {
      data
    }
  }
}

const fetchUserPostsFailure = error => ({
  type: FETCH_USER_POSTS_FAILURE,
  payload: {
    error
  }
})

export const fetchUserPosts = ids => async dispatch => {
  dispatch(fetchUserPostsStart())

  try {
    const posts = await api.fetchPosts(ids)
    dispatch(fetchUserPostsSuccess(posts))
  } catch (error) {
    dispatch(fetchUserPostsFailure(error))
  }
}
