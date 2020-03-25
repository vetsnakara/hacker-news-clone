import { combineReducers } from 'redux'

import infoReducer from './info'
import commentsReducer from './comments'

export default combineReducers({
  info: infoReducer,
  comments: commentsReducer
})
