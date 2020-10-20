import React from 'react';

import Toolbar from '@material-ui/core/Toolbar'
import NavigationItem from './navigationItem' 

export default function NavigationBar() {

  return (
    <Toolbar className={'navigation-bar'}>
        <NavigationItem>
          SOBRE EL PROYECTO
        </NavigationItem>
        <NavigationItem>
          ACCIONES  
        </NavigationItem>
        <NavigationItem>
          VIDEOS
        </NavigationItem>
        <NavigationItem>
          ARCHIVOS
        </NavigationItem>
        <NavigationItem>
          CONTACTO/SUMATE
        </NavigationItem>
        <NavigationItem>
          LINKS
        </NavigationItem>
    </Toolbar>
  );
}
