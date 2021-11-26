import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { headerStyle } from '../../styles/header'

export default function Header() {
  
  const classes = headerStyle()

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <img 
            src={'/banners/logoUndav.png'} 
            alt={'UNDAV Universidad Nacional de Avellaneda'}
            />
          <Box display='flex' flexGrow={1} className={classes.baseFlex}>
            <Typography className={classes.textTop}>
              SECRETARIA DE EXTENSIÓN
            </Typography>
            <Box display='flex' flexGrow={1} className={classes.bottomFlex}>
              <img
                src={'/banners/tittle.png'}
                alt={'La UNDAV con las Abuelas por la identidad'} />
            </Box>
          </Box>
          <img
            src={'/banners/logoAbuelas.png'}
            alt={'Abuelas de Plaza de Mayo'} />
        </Toolbar>
      </AppBar>
    </div>
  );
}