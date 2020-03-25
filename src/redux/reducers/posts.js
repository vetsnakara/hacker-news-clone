import {
  FETCH_POSTS_START,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE
} from '../actions/posts'

const initState = {
  data: [],
  error: null,
  loading: false
}

const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_POSTS_START:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data
      }
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error.message
      }
    default:
      return state
  }
}

export default postsReducer
