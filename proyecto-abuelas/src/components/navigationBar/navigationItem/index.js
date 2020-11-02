import React from 'react';

import NavigationButton from './navigationButton';
import NavigationMenu from './navigationMenu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
  }
}));

export default function NavigationItem(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleToggle = (event) => {
    setOpen((prevOpen) => !prevOpen);
    if(!anchorEl){
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = (event) => {
    if (anchorEl && anchorEl.current && anchorEl.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  return (
    <div className={classes.root}>
      <NavigationButton
        open={open}
        handleToggle={handleToggle}
      >
        {props.children} 
      </NavigationButton>
      <NavigationMenu 
        anchorElem={anchorEl}
        open={open}
        handleClose={handleClose}/>
    </div>
  );
}