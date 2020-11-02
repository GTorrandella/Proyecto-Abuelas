import React from 'react';

import Grid from '@material-ui/core/Grid'
import NavigationItem from './navigationItem'
import {
  aboutUsStyte,
  actionsStyle,
  videosStyle,
  filesStyle,
  contactUsStyle,
  linksStyle,
} from '../../styles/navigationBar'


export default function NavigationBar() {

  return (
    <div className={'navigation-bar'}>
      <Grid container spacing={0}>
        <Grid item xs className={aboutUsStyte().root}>
          <NavigationItem>
            SOBRE EL PROYECTO
          </NavigationItem>
        </Grid>
        <Grid item xs className={actionsStyle().root}>
          <NavigationItem>
            ACCIONES
          </NavigationItem>
        </Grid>
        <Grid item xs className={videosStyle().root}>
          <NavigationItem>
            VIDEOS
          </NavigationItem>
        </Grid>
        <Grid item xs className={filesStyle().root}>
          <NavigationItem>
            ARCHIVOS
          </NavigationItem>
        </Grid>
        <Grid item xs className={contactUsStyle().root}>
          <NavigationItem>
            CONTACTO/SUMATE
          </NavigationItem>
        </Grid>
        <Grid item xs className={linksStyle().root}>
          <NavigationItem>
            LINKS
          </NavigationItem>
        </Grid>
      </Grid>
    </div>
  );
}
