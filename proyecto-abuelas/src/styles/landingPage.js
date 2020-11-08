import { makeStyles } from '@material-ui/core/styles';
const color = require('./colors.json');

export const landingPageStyle = makeStyles((theme) => ({
  grid: {
    marginTop: '0.5vh',
    paddingBottom: theme.spacing(8),
    width: '100vw',
    height: '80vh',
    backgroundColor: color['landind-background'],
  },
  image: {
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center center',
    margin: '2vw',
  }
}));