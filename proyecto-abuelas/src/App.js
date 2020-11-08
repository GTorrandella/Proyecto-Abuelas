import React from 'react';
import Header from './components/header';
import NavigationBar from './components/navigationBar'
import LandingPage from './components/landingPage'
import './App.css';
import Footer from './components/footer';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Header />
      <NavigationBar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
