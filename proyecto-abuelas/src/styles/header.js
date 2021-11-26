import { makeStyles } from '@material-ui/core/styles';
const color = require('./colors.json');

export const headerStyle = makeStyles({
  root: {
    width: '100%',
    paddingBottom: '15px',
    maxHeight: '100px',
    margin: 'auto',
    background: color["header-background"],
  },
  baseFlex: {
    flexDirection: 'column',
    marginTop: '15px',
    paddingLeft: '20px',
  },
  bottomFlex: {
    flexDirection: 'row',
  },
  smallFlex: {
    flexDirection: 'column',
    marginLeft: '10px',
    marginRight: '5px',
  },
  textTop: {
    fontFamily: 'Anton',
    fontSize: '1.3rem',
    letterSpacing: '0.2rem',
    fontWeight: 'medium',
    textAlign: 'left',
  },
  textBottom:{
    fontFamily: 'Fredericka the Great',
    fontWeight: 'bold',
    fontSize: '2.2rem',
    textAlign: 'left',
  },
  textBottomSmall:{
    fontFamily: 'Abegnale',
    fontSize: '1rem',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  textBottomVertical:{
    fontFamily: 'Abegnale',
    fontWeight: 'bold',
    fontSize: '0.7rem',
    alignItems: 'center',
    textAlign: 'left',
    writingMode: 'sideways-lr',
    textOrientation: 'mixed',
    marginRight: '4px',
  }
});