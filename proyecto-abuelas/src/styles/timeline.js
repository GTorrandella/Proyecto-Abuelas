import { makeStyles } from '@material-ui/core/styles';
const color = require('./colors.json');

const baseYearStyle = {
  borderWidth: '6px',
  height: '85px',
  width: '85px',
  fontSize: '2em',
  fontFamily: 'Anton',
  letterSpacing: '1px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#000000',
  margin: "0px 16px"
}

const baseDotStyle = {
  margin: '0px',
  height: '20px',
  width: '20px',
  boxShadow: 'unset',
}

const baseLineStyle = {
  width: '10px',
}

const baseBlockLeftStyle = {
  display:'flex',
  flexDirection:'column',
  margin: '5px',
  padding: '5px',
  borderRightStyle: 'solid',
  borderRightWidth: '2px',
  textAlign: 'right',
}

const baseBlockRightStyle = {
  display:'flex',
  flexDirection:'column',
  margin: '5px',
  padding: '5px',
  borderLeftStyle: 'solid',
  borderLeftWidth: '2px',
  textAlign: 'left',
}

const basePhotoStyle = {
  borderStyle: 'solid',
  borderRadius: '50%',
  borderWidth: '5px',
  height: '70px',
  width: '70px',
}

const baseConnectorStyle = {
  borderRadius: '0%',
  height: '5px',
  width: '35px',
}

export const timelineBaseStyle = makeStyles({
  root:{
    height: '70vh',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F1F1F1',
  }
})

export const firstYearStyle = makeStyles({
  dot:{
    borderColor: color["about-us-red"],
    ...baseYearStyle,
  },
  line: {
    backgroundColor: color["about-us-red"],
    ...baseLineStyle,
  }
});

export const firstBlockStyle = makeStyles({
  dot:{
    ...baseDotStyle,
    borderColor: color["about-us-red"],
    backgroundColor: color["about-us-red"],
  },
  connector:{
    ...baseConnectorStyle,
    backgroundColor: color["about-us-red"],
    borderBlock: color["about-us-red"]
  },
  line:{
    backgroundColor: color["about-us-red"],
    ...baseLineStyle,
  },
  blockLeft:{
    borderRightColor: color["about-us-red"],
    ...baseBlockLeftStyle,
  },
  blockRight:{
    borderLeftColor: color["about-us-red"],
    ...baseBlockRightStyle,
  },
  photo: {
    borderColor: color["about-us-red"],
    ...basePhotoStyle,
  }
});

export const secondYearStyle = makeStyles({
  dot:{
    borderColor: color["actions-blue"],
    ...baseYearStyle,
  },
  line: {
    backgroundColor: color["actions-blue"],
    ...baseLineStyle,
  }
});

export const secondBlockStyle = makeStyles({
  dot:{
    ...baseDotStyle,
    borderColo: color["actions-blue"],
    backgroundColor: color["actions-blue"],
  },
  connector:{
    ...baseConnectorStyle,
    backgroundColor: color["actions-blue"],
    borderBlock: color["actions-blue"]
  },
  line:{
    backgroundColor: color["actions-blue"],
    ...baseLineStyle,
  },
  blockLeft:{
    borderRightColor: color["actions-blue"],
    ...baseBlockLeftStyle,
  },
  blockRight:{
    borderLeftColor: color["actions-blue"],
    ...baseBlockRightStyle,
  },
  photo: {
    borderColor: color["actions-blue"],
    ...basePhotoStyle,
  }
});

export const thirdYearStyle = makeStyles({
  dot:{
    borderColor: color["multimedia-yellow"],
    ...baseYearStyle,
  },
  line: {
    backgroundColor: color["multimedia-yellow"],
    ...baseLineStyle,
  }
});

export const thirdBlockStyle = makeStyles({
  dot:{
    ...baseDotStyle,
    borderColo: color["multimedia-yellow"],
    backgroundColor: color["multimedia-yellow"],
  },
  connector:{
    ...baseConnectorStyle,
    backgroundColor: color["multimedia-yellow"],
    borderBlock: color["multimedia-yellow"]
  },
  line:{
    backgroundColor: color["multimedia-yellow"],
    ...baseLineStyle,
  },
  blockLeft:{
    borderRightColor: color["multimedia-yellow"],
    ...baseBlockLeftStyle,
  },
  blockRight:{
    borderLeftColor: color["multimedia-yellow"],
    ...baseBlockRightStyle,
  },
  photo: {
    borderColor: color["multimedia-yellow"],
    ...basePhotoStyle,
  }
});

export const fourthYearStyle = makeStyles({
  dot:{
    borderColor: color["files-brown"],
    ...baseYearStyle,
  },
  line: {
    backgroundColor: color["files-brown"],
    ...baseLineStyle,
  }
});

export const fourthBlockStyle = makeStyles({
  dot:{
    ...baseDotStyle,
    borderColo: color["files-brown"],
    backgroundColor: color["files-brown"],
  },
  connector:{
    ...baseConnectorStyle,
    backgroundColor: color["files-brown"],
    borderBlock: color["files-brown"]
  },
  line:{
    backgroundColor: color["files-brown"],
    ...baseLineStyle,
  },
  blockLeft:{
    borderRightColor: color["files-brown"],
    ...baseBlockLeftStyle,
  },
  blockRight:{
    borderLeftColor: color["files-brown"],
    ...baseBlockRightStyle,
  },
  photo: {
    borderColor: color["files-brown"],
    ...basePhotoStyle,
  }
});

export const fifthYearStyle = makeStyles({
  dot:{
    borderColor: color["contact-green"],
    ...baseYearStyle,
  },
  line: {
    backgroundColor: color["contact-green"],
    ...baseLineStyle,
  }
});

export const fifthBlockStyle = makeStyles({
  dot:{
    ...baseDotStyle,
    borderColo: color["contact-green"],
    backgroundColor: color["contact-green"],
  },
  connector:{
    ...baseConnectorStyle,
    backgroundColor: color["contact-green"],
    borderBlock: color["contact-green"]
  },
  line:{
    backgroundColor: color["contact-green"],
    ...baseLineStyle,
  },
  blockLeft:{
    borderRightColor: color["contact-green"],
    ...baseBlockLeftStyle,
  },
  blockRight:{
    borderLeftColor: color["contact-green"],
    ...baseBlockRightStyle,
  },
  photo: {
    borderColor: color["contact-green"],
    ...basePhotoStyle,
  }
});

export const sixthYearStyle = makeStyles({
  dot:{
    borderColor: color["links-blue"],
    ...baseYearStyle,
  },
  line: {
    backgroundColor: color["links-blue"],
    ...baseLineStyle,
  }
});

export const sixthBlockStyle = makeStyles({
  dot:{
    ...baseDotStyle,
    borderColo: color["links-blue"],
    backgroundColor: color["links-blue"],
  },
  connector:{
    ...baseConnectorStyle,
    backgroundColor: color["links-blue"],
    borderBlock: color["links-blue"]
  },
  line:{
    backgroundColor: color["links-blue"],
    ...baseLineStyle,
  },
  blockLeft:{
    borderRightColor: color["links-blue"],
    ...baseBlockLeftStyle,
  },
  blockRight:{
    borderLeftColor: color["links-blue"],
    ...baseBlockRightStyle,
  },
  photo: {
    borderColor: color["links-blue"],
    ...basePhotoStyle,
  }
});