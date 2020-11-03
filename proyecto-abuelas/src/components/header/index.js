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
        <Toolbar className='header-undav'>
          <img 
            src={'/banners/logoUndav.png'} 
            alt={'UNDAV Universidad Nacional de Avellaneda'}
            />
          <Box display='flex' flexGrow={1}>
            <div className={classes.textBox}>
              <div className='row'>
                <Typography className={classes.textTop}>
                  Secretaria de Extención
                </Typography>
              </div>
              <div className='row'>
                <Typography className={classes.textBottom}>
                  La UNDAV con las ABUELAS por la identidad
                </Typography>
              </div>
            </div>
          </Box>
          <img
            src={'/banners/logoAbuelas.png'}
            alt={'Abuelas de Plaza de Mayo'} />
        </Toolbar>
      </AppBar>
    </div>
  );
}