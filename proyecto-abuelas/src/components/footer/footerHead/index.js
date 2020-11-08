import React from 'react';
import Grid from '@material-ui/core/Grid'

export default function FooterHead(props) {
  return (
    <React.Fragment>
      <Grid container className={props.className.root}>
        <Grid item xs className={props.className.aboutUs}>
          SOBRE EL PROYECTO
        </Grid>
        <Grid item xs className={props.className.actions}>
          ACCIONES
        </Grid>
        <Grid item xs className={props.className.videos}>
          VIDEOS
        </Grid>
        <Grid item xs className={props.className.files}>
          ARCHIVOS
        </Grid>
        <Grid item xs className={props.className.contactUs}>
          CONTACTO/SUMATE
        </Grid>
        <Grid item xs className={props.className.links}>
          LINKS
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
