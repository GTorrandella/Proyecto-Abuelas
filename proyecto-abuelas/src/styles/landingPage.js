import { makeStyles } from '@material-ui/core/styles';
const color = require('./colors.json');

export const landingPageStyle = makeStyles((theme) => ({
  grid: {
    marginTop: '0.5vh',
    paddingBottom: theme.spacing(7),
    width: '100vw',
    height: '70vh',
    backgroundColor: color['landind-background'],
  },
  image: {
    height: '60vh',
    objectFit: 'cover',
    objectPosition: 'center center',
    margin: '2vw',
  }
}));