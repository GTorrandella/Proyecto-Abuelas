import React from 'react';
import {
  Toolbar,
  Typography,
 } from '@material-ui/core';

class Header extends React.Component {

  render() {
    
    return (
      <React.Fragment>
        <header position="static" className='header-undav'>
          <img src={'/banners/bannerUndav.jpg'}></img>
        </header>
        <header position="static" className='header-abuelas'>
          <img src={'/banners/bannerAbuelas.png'}></img>
        </header>
      </React.Fragment>

    );
  }

}

export default Header;