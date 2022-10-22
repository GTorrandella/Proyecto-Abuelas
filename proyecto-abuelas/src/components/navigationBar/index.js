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
import StringConstants from '../../locale';


export default function NavigationBar() {

  const strings = StringConstants();

  return (
    <div className={'navigation-bar'}>
      <Grid container spacing={0}>
        <Grid item xs className={aboutUsStyte().root}>
          <NavigationItem>
            {[strings.nav_about]}
          </NavigationItem>
        </Grid>
        <Grid item xs className={actionsStyle().root}>
          <NavigationItem>
            {[<Link to="/acciones">
              {strings.nav_actions}
            </Link>]}
          </NavigationItem>
        </Grid>
        <Grid item xs className={multimediaStyle().root}>
          <NavigationItem>
            {[strings.nav_multimedia]}
          </NavigationItem>
        </Grid>
        <Grid item xs className={contactUsStyle().root}>
          <NavigationItem>
            {[strings.nav_contact]}
          </NavigationItem>
        </Grid>
        <Grid item xs className={linksStyle().root}>
          <NavigationItem>
            {[strings.nav_links]}
          </NavigationItem>
        </Grid>
        <Grid item xs className={searchStyle().root}>
          <NavigationSeachBar>
            {[strings.nav_search]}
          </NavigationSeachBar>
        </Grid>
      </Grid>
    </div>
  );
}
