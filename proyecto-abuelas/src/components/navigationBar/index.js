import React from 'react';

import Grid from '@material-ui/core/Grid'
import NavigationItem from './navigationItem'
import {
  aboutUsStyte,
  actionsStyle,
  multimediaStyle,
  contactUsStyle,
  linksStyle,
  searchStyle,
} from '../../styles/navigationBar'
import { Link } from 'react-router-dom';
import NavigationSeachBar from './navigationSearchBar';


export default function NavigationBar() {

  return (
    <div className={'navigation-bar'}>
      <Grid container spacing={0}>
        <Grid item xs className={aboutUsStyte().root}>
          <NavigationItem>
            {["SOBRE EL PROYECTO"]}
          </NavigationItem>
        </Grid>
        <Grid item xs className={actionsStyle().root}>
          <NavigationItem>
            {[<Link to="/acciones">
            {"ACCIONES"}
            </Link>]}
          </NavigationItem>
        </Grid>
        <Grid item xs className={multimediaStyle().root}>
          <NavigationItem>
            {["MULTIMEDIA"]}
          </NavigationItem>
        </Grid>
        <Grid item xs className={contactUsStyle().root}>
          <NavigationItem>
            {["CONTACTO/SUMATE"]}
          </NavigationItem>
        </Grid>
        <Grid item xs className={linksStyle().root}>
          <NavigationItem>
            {["LINKS"]}
          </NavigationItem>
        </Grid>
        <Grid item xs className={searchStyle().root}>
          <NavigationSeachBar>
            {["BUSQUEDA"]}
          </NavigationSeachBar>
        </Grid>
      </Grid>
    </div>
  );
}
