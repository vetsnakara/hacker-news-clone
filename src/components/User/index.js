import { connect } from 'react-redux'
import { fetchUser } from '../../redux/actions/user'

import User from './User'

const mapState = ({ user: { info, posts } }) => ({
  info,
  posts
})

const mapDispatch = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
})

export default connect(
  mapState,
  mapDispatch
)(User)
