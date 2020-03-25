import { createUseStyles } from 'react-jss'

export default createUseStyles({
  metaInfo: {
    marginTop: 5,
    color: 'gray',

    '& a': {
      color: 'black'
    },

    '& span': {
      margin: '10px 0',
      marginRight: 6
    }
  },

  text: {
    marginBottom: 40
  }
})
