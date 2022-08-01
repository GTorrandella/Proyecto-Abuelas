import { makeStyles } from '@material-ui/core/styles';
const color = require('./colors.json');

export const footerHeadStyle = makeStyles({
  root: {
    fontFamily: 'Anton',
    marginTop: '2.5vh',
  },
  aboutUs: {
    color: color["about-us-red"],
  },
  actions: {
    color: color["actions-blue"],
  },
  videos: {
    color: color["multimedia-yellow"],
  },
  files: {
    color: color["files-brown"],
  },
  contactUs: {
    color: color["contact-green"],
  },
  links: {
    color: color["links-blue"],
  },
});

export const footerBodyStyle = makeStyles({
  root: {
    fontFamily: 'Anton',
    color: '#FFFFFF', 
    backgroundColor: color["footer-background"],
    paddingTop: '2.5vh',
  },
});
