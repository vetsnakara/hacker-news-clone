import {
  FETCH_USER_INFO_START,
  FETCH_USER_INFO_SUCCESS,
  FETCH_USER_INFO_FAILURE
} from '../../actions/user'

const initState = {
  data: null,
  error: null,
  loading: false
}

const infoReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_USER_INFO_START:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_USER_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data
      }
    case FETCH_USER_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error.message
      }
    default:
      return state
  }
}

export default infoReducer
