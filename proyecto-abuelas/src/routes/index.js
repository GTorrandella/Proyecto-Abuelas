import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from '../components/landingPage'
import AudioPage from './audio'
import FilePage from './file'
import VideoPage from './video'
import ImagePage from './image'

export default function Navigation() {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Switch>
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
                    <Route path="/">
                        <LandingPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
}