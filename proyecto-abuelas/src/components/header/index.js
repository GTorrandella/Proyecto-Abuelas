import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { headerStyle } from '../../styles/header'
import StringConstants from '../../locale';

export default function Header() {
  
  const strings = StringConstants();
  const classes = headerStyle()

  return (
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <a href='https://undav.edu.ar/index.php'>
            <img
              src={'/banners/logoUndav.png'} 
              alt={strings.alt_img_undav} />
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
                  alt={strings.alt_img_lemaExtension} />
              </a>
            </Box>
          </Box>
          <a href='https://www.abuelas.org.ar/'>
            <img
              src={'/banners/logoAbuelas.png'}
              alt={strings.atl_img_dibujoAbuelas} />
          </a>
        </Toolbar>
      </AppBar>
  );
}