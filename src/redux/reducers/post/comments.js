import {
  FETCH_POST_COMMENTS_START,
  FETCH_POST_COMMENTS_SUCCESS,
  FETCH_POST_COMMENTS_FAILURE
} from '../../actions/post'

const initState = {
  data: [],
  error: null,
  loading: false
}

const commentsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_POST_COMMENTS_START:
      return {
        ...state,
        error: null,
        loading: true
      }
    case FETCH_POST_COMMENTS_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false
      }
    case FETCH_POST_COMMENTS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false
      }
    default:
      return state
  }
}

export default commentsReducer
