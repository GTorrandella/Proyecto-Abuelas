import React from 'react';
import logo from './logo.svg';
import Header from './components/header';
import NavigationBar from './components/navigationBar'
import Album from './components/album'
import './App.css';
import Footer from './components/footer';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Header />
      <NavigationBar />
      <Album />
      <Footer />
    </div>
  );
}

export default App;
