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

export const videosStyle = makeStyles({
  root: {
    backgroundColor: color["multimedia-yellow"],
  },
});

export const filesStyle = makeStyles({
  root: {
    backgroundColor: color["files-brown"],
  },
});

export const contactUsStyle = makeStyles({
  root: {
    backgroundColor: color["contact-green"],
  },
});

export const linksStyle = makeStyles({
  root: {
    backgroundColor: color["links-blue"],
  },
});

export const buttonStyle = makeStyles({
  root: {
    letterSpacing: '0.1rem',
    fontFamily: 'Anton',
  }
})