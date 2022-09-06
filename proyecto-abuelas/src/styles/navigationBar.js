import { makeStyles } from '@material-ui/core/styles';
const color = require('./colors.json');

export const aboutUsStyte = makeStyles({
  root: {
    backgroundColor: color["about-us-red"],
  },
});

export const actionsStyle = makeStyles({
  root: {
    backgroundColor: color["actions-blue"],
  },
});

export const multimediaStyle = makeStyles({
  root: {
    backgroundColor: color["multimedia-yellow"],
  },
});

export const contactUsStyle = makeStyles({
  root: {
    backgroundColor: color["contactus-brown"],
  },
});

export const linksStyle = makeStyles({
  root: {
    backgroundColor: color["links-green"],
  },
});

export const searchStyle = makeStyles({
  root: {
    backgroundColor: "#b0c1db",
  },
});

export const baseStyle = makeStyles({
  text: {
    display: 'flex',
    maxHeight: '2rem',
    letterSpacing: '0.1rem',
    fontFamily: 'Anton',
    alignItems: 'center',
    paddingLeft: '1rem',
  },
  buttom: {
    maxHeight: "2rem",
  },
  input: {
    fontFamily: 'Anton',
    maxHeight:'1.2rem',
  }
})