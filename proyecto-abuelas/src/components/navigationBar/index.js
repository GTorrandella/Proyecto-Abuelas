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
            {[strings.nav_about,[
              {
                title: strings.nav_about_who,
                link: "/quien"
              },
              {
                title: strings.nav_about_undav,
                link: "/quien/universidad"
              },
              {
                title: strings.nav_about_abuelas,
                link: "/quien/abuelas"
              }
            ]]}
          </NavigationItem>
        </Grid>
        <Grid item xs className={actionsStyle().root}>
          <NavigationItem>
            {[strings.nav_actions,[
              {
                title: strings.nav_actions_all,
                link: "/acciones/todas"
              },
              {
                title: strings.nav_actions_timeline,
                link: "/acciones"
              },
              {
                title: strings.nav_actions_what,
                link: "/acciones/que"
              }
            ]]}
          </NavigationItem>
        </Grid>
        <Grid item xs className={multimediaStyle().root}>
          <NavigationItem>
            {[strings.nav_multimedia,[
              {
                title: strings.nav_multimedia_videos,
                link: "/multimedias"
              },
              {
                title: strings.nav_multimedia_audios,
                link: "/audios"
              },
              {
                title: strings.nav_multimedia_files,
                link: "/files"
              },
              {
                title: strings.nav_multimedia_photos,
                link: "/photos"
              }
            ]]}
          </NavigationItem>
        </Grid>
        <Grid item xs className={contactUsStyle().root}>
          <NavigationItem nomenu={true}>
            {[strings.nav_contact]}
          </NavigationItem>
        </Grid>
        <Grid item xs className={linksStyle().root}>
          <NavigationItem nomenu={true}>
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
