import {
  FETCH_POST_INFO_START,
  FETCH_POST_INFO_SUCCESS,
  FETCH_POST_INFO_FAILURE
} from '../../actions/post'

const initState = {
  data: null,
  error: null,
  loading: false
}

const infoReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_POST_INFO_START:
      return {
        ...state,
        error: null,
        loading: true
      }
    case FETCH_POST_INFO_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false
      }
    case FETCH_POST_INFO_FAILURE:
      return {
        ...state,
        error: action.payload.error.message,
        loading: false
      }
    default:
      return state
  }
}

export default infoReducer
