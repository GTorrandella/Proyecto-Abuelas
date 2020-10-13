import React from 'react';
import {
  Toolbar,
  Typography,
 } from '@material-ui/core';

class Header extends React.Component {

  render() {
    
    return (
      <React.Fragment>
        <header position="static" className='header-undav' />
        <header position="static" className='header-abuelas'>Header Abuelas</header>
      </React.Fragment>

    );
  }

}

export default Header;