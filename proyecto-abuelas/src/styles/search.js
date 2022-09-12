import { makeStyles } from '@material-ui/core/styles';
const color = require('./colors.json');

export const searchBaseStyle = makeStyles({
    root:{
      height: '70vh',
      maxWidth: 'md',
      overflow: 'auto',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#F1F1F1',
    },
    list: {
        margin: '0'
    }
  })