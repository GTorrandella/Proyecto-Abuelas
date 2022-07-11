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
  }
});