import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from '../components/landingPage'
import ActivitiesTimeline from '../components/activitiesTimeline'
import AudioPage from './audio'
import FilePage from './file'
import VideoPage from './video'
import ImagePage from './image'
import SearchPage from './search';

export default function Navigation() {

    return (
        <React.Fragment>
            <Switch>
                <Route path="/acciones">
                    <ActivitiesTimeline />
                </Route>
                <Route path="/audio/:id">
                    <AudioPage />
                </Route>
                <Route path="/video/:id">
                    <VideoPage />
                </Route>
                <Route path="/imagen/:id">
                    <ImagePage />
                </Route>
                <Route path="/archivo/:id">
                    <FilePage />
                </Route>
                <Route path="/busqueda">
                    <SearchPage />
                </Route>
                <Route path="/">
                    <LandingPage />
                </Route>
            </Switch>
        </React.Fragment>
    );
}