import { connect } from 'react-redux'
import { fetchPosts } from '../../redux/actions/posts'

import Posts from './Posts'

const mapState = ({ posts }) => ({
  posts: posts.data,
  loading: posts.loading,
  error: posts.error
})

const mapDispatch = dispatch => ({
  fetchPosts: type => dispatch(fetchPosts(type))
})

export default connect(
  mapState,
  mapDispatch
)(Posts)
