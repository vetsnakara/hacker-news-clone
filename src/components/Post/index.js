import { connect } from 'react-redux'

import Post from './Post'
import { fetchPost } from '../../redux/actions/post'

const mapState = ({ post: { info, comments } }) => ({
  info,
  comments
})

const mapDispatch = dispatch => ({
  fetchPost: id => dispatch(fetchPost(id))
})

export default connect(
  mapState,
  mapDispatch
)(Post)
