import { combineReducers } from 'redux'

import userInfoReducer from './info'
import userPostsReducer from './posts'

export default combineReducers({
  info: userInfoReducer,
  posts: userPostsReducer
})
