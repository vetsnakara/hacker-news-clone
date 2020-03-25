import { combineReducers } from 'redux'

import postsReducer from '../reducers/posts'
import postReducer from '../reducers/post'
import userReducer from '../reducers/user'

export default combineReducers({
  posts: postsReducer,
  post: postReducer,
  user: userReducer
})
