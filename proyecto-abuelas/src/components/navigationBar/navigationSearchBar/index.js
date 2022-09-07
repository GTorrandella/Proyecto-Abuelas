import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { baseStyle } from '../../../styles/navigationBar';

export default function NavigationSeachBar(props) {
  const classes = baseStyle();
  const [text, setText] = React.useState(null);

  return (
    <div className={classes.text}>
      <InputBase
        className={classes.input}
        placeholder={props.children} 
        inputProps={{ 'aria-label': 'busqueda' }}
      />
      <Button 
        className={classes.buttom}
        aria-label="search">
        <SearchIcon />
      </Button>
    </div>
  );
}