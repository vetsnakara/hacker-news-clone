import { fetchUser } from '../../../api'

export const FETCH_USER_INFO_START = 'FETCH_USER_INFO_START'
export const FETCH_USER_INFO_SUCCESS = 'FETCH_USER_INFO_SUCCESS'
export const FETCH_USER_INFO_FAILURE = 'FETCH_USER_INFO_FAILURE'

const fetchUserInfoStart = () => ({
  type: FETCH_USER_INFO_START
})

const fetchUserInfoSuccess = data => ({
  type: FETCH_USER_INFO_SUCCESS,
  payload: {
    data
  }
})

const fetchUserInfoFailure = error => ({
  type: FETCH_USER_INFO_FAILURE,
  payload: {
    error
  }
})

export const fetchUserInfo = id => async dispatch => {
  dispatch(fetchUserInfoStart())

  try {
    const user = await fetchUser(id)
    const { submitted, ...userData } = user
    dispatch(fetchUserInfoSuccess(userData))
    return user
  } catch (error) {
    dispatch(fetchUserInfoFailure(error))
  }
}
