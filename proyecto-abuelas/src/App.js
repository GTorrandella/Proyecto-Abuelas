import React from 'react';
import Header from './components/header';
import NavigationBar from './components/navigationBar'
import Navigation from './routes'
import './App.css';
import Footer from './components/footer';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={"/"}>
        <CssBaseline/>
        <Header />
        <NavigationBar />
        <Navigation />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;