import { createUseStyles } from 'react-jss'

export default createUseStyles(theme => ({
  metaInfo: {
    marginTop: 5,
    color: 'gray',

    '& a': {
      color: theme.link.color
    },

    '& span': {
      margin: '10px 0',
      marginRight: 6
    }
  }
}))
