import { fetchComments } from '../../../api'

export const FETCH_POST_COMMENTS_START = 'FETCH_POST_COMMENTS_START'
export const FETCH_POST_COMMENTS_SUCCESS = 'FETCH_POST_COMMENTS_SUCCESS'
export const FETCH_POST_COMMENTS_FAILURE = 'FETCH_POST_COMMENTS_FAILURE'

const fetchPostCommentsStart = () => ({
  type: FETCH_POST_COMMENTS_START
})

const fetchPostCommentsSuccess = data => ({
  type: FETCH_POST_COMMENTS_SUCCESS,
  payload: {
    data
  }
})

const fetchPostCommentsFailure = error => ({
  type: FETCH_POST_COMMENTS_FAILURE,
  payload: {
    error
  }
})

export const fetchPostComments = ids => async dispatch => {
  try {
    dispatch(fetchPostCommentsStart())
    const comments = await fetchComments(ids)
    dispatch(fetchPostCommentsSuccess(comments))
  } catch (error) {
    dispatch(fetchPostCommentsFailure(error))
  }
}
