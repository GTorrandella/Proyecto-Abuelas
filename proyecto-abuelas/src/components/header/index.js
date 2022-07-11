import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { headerStyle } from '../../styles/header'

export default function Header() {
  
  const classes = headerStyle()

  return (
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <a href='https://undav.edu.ar/index.php'>
            <img
              src={'/banners/logoUndav.png'} 
              alt={'UNDAV Universidad Nacional de Avellaneda'} />
          </a>
            <Box display='flex' flexGrow={1} className={classes.baseFlex}>
              <a href='/'>
                <Typography className={classes.textTop}>
                  SECRETARIA DE EXTENSIÓN
                </Typography>
              </a>
              <Box display='flex' flexGrow={1} className={classes.bottomFlex}>
                <a href='/'>
                  <img
                    src={'/banners/tittle.png'}
                    alt={'La UNDAV con las Abuelas por la identidad'} />
                </a>
              </Box>
            </Box>
          <a href='https://www.abuelas.org.ar/'>
            <img
              src={'/banners/logoAbuelas.png'}
              alt={'Abuelas de Plaza de Mayo'} />
          </a>
        </Toolbar>
      </AppBar>
  );
}