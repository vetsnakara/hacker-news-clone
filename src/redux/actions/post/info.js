import { fetchItem } from '../../../api'

export const FETCH_POST_INFO_START = 'FETCH_POST_INFO_START'
export const FETCH_POST_INFO_SUCCESS = 'FETCH_POST_INFO_SUCCESS'
export const FETCH_POST_INFO_FAILURE = 'FETCH_POST_INFO_FAILURE'

const fetchPostInfoStart = () => ({
  type: FETCH_POST_INFO_START
})

const fetchPostInfoSuccess = data => ({
  type: FETCH_POST_INFO_SUCCESS,
  payload: {
    data
  }
})

const fetchPostInfoFailure = error => ({
  type: FETCH_POST_INFO_FAILURE,
  payload: {
    error
  }
})

export const fetchPostInfo = id => async dispatch => {
  try {
    dispatch(fetchPostInfoStart())
    const info = await fetchItem(id)
    dispatch(fetchPostInfoSuccess(info))
    return info
  } catch (error) {
    dispatch(fetchPostInfoFailure(error))
  }
}
