import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from '../components/landingPage'
import Base from '../components/multimediaTemplate'
import Audio from '../components/multimedia/audio'
import Video from '../components/multimedia/video'
import Image from '../components/multimedia/image'
import File from '../components/multimedia/file'

export default function Navigation() {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Switch>
                    <Route path="/audio/:id">
                        <Base multimedia={<Audio />} activity={{}} />
                    </Route>
                    <Route path="/video/:id">
                        <Base multimedia={<Video />} activity={{}} />
                    </Route>
                    <Route path="/imagen/:id">
                        <Base multimedia={<Image />} activity={{}} />
                    </Route>
                    <Route path="/archivo/:id">
                        <Base multimedia={<File />} activity={{}} />
                    </Route>
                    <Route path="/">
                        <LandingPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
}