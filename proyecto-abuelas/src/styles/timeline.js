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
    borderColor: color["contactus-brown"],
    ...baseYearStyle,
  },
  line: {
    backgroundColor: color["contactus-brown"],
    ...baseLineStyle,
  }
});

export const fourthBlockStyle = makeStyles({
  dot:{
    ...baseDotStyle,
    borderColo: color["contactus-brown"],
    backgroundColor: color["contactus-brown"],
  },
  connector:{
    ...baseConnectorStyle,
    backgroundColor: color["contactus-brown"],
    borderBlock: color["contactus-brown"]
  },
  line:{
    backgroundColor: color["contactus-brown"],
    ...baseLineStyle,
  },
  blockLeft:{
    borderRightColor: color["contactus-brown"],
    ...baseBlockLeftStyle,
  },
  blockRight:{
    borderLeftColor: color["contactus-brown"],
    ...baseBlockRightStyle,
  },
  photo: {
    borderColor: color["contactus-brown"],
    ...basePhotoStyle,
  }
});

export const fifthYearStyle = makeStyles({
  dot:{
    borderColor: color["links-green"],
    ...baseYearStyle,
  },
  line: {
    backgroundColor: color["links-green"],
    ...baseLineStyle,
  }
});

export const fifthBlockStyle = makeStyles({
  dot:{
    ...baseDotStyle,
    borderColo: color["links-green"],
    backgroundColor: color["links-green"],
  },
  connector:{
    ...baseConnectorStyle,
    backgroundColor: color["links-green"],
    borderBlock: color["links-green"]
  },
  line:{
    backgroundColor: color["links-green"],
    ...baseLineStyle,
  },
  blockLeft:{
    borderRightColor: color["links-green"],
    ...baseBlockLeftStyle,
  },
  blockRight:{
    borderLeftColor: color["links-green"],
    ...baseBlockRightStyle,
  },
  photo: {
    borderColor: color["links-green"],
    ...basePhotoStyle,
  }
});

export const sixthYearStyle = makeStyles({
  dot:{
    borderColor: color["search-blue"],
    ...baseYearStyle,
  },
  line: {
    backgroundColor: color["search-blue"],
    ...baseLineStyle,
  }
});

export const sixthBlockStyle = makeStyles({
  dot:{
    ...baseDotStyle,
    borderColo: color["search-blue"],
    backgroundColor: color["search-blue"],
  },
  connector:{
    ...baseConnectorStyle,
    backgroundColor: color["search-blue"],
    borderBlock: color["search-blue"]
  },
  line:{
    backgroundColor: color["search-blue"],
    ...baseLineStyle,
  },
  blockLeft:{
    borderRightColor: color["search-blue"],
    ...baseBlockLeftStyle,
  },
  blockRight:{
    borderLeftColor: color["search-blue"],
    ...baseBlockRightStyle,
  },
  photo: {
    borderColor: color["search-blue"],
    ...basePhotoStyle,
  }
});