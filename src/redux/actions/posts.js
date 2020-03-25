import * as api from '../../api'

export const FETCH_POSTS_START = 'FETCH_POSTS_START'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'

const fetchPostsStart = () => ({
  type: FETCH_POSTS_START
})

const fetchPostSuccess = data => ({
  type: FETCH_POSTS_SUCCESS,
  payload: {
    data
  }
})

const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE,
  payload: {
    error
  }
})

export const fetchPosts = type => async dispatch => {
  dispatch(fetchPostsStart())

  try {
    const posts = await api.fetchMainPosts(type)
    dispatch(fetchPostSuccess(posts))
  } catch (error) {
    dispatch(fetchPostsFailure(error))
  }
}
