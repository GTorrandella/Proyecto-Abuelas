import React from 'react';

import NavigationMenu from './navigationMenu';
import Button from '@material-ui/core/Button';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import { baseStyle } from '../../../styles/navigationBar';
import { Typography } from '@material-ui/core';

export default function NavigationItem(props) {
  const classes = baseStyle();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleToggle = (event) => {
    setOpen((prevOpen) => !prevOpen);
    if(!anchorEl){
      setAnchorEl(event.currentTarget.parentElement);
    }
  };

  const handleClose = (event) => {
    if (anchorEl && anchorEl.current) {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.text}>
      {props.children[0]}
      <Button
        className={classes.buttom}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}>
          {open ? <ExpandLess /> : <ExpandMore />}
      </Button>
      <NavigationMenu 
        anchorElem={anchorEl}
        open={open}
        handleClose={handleClose}/>
    </div>
  );
}