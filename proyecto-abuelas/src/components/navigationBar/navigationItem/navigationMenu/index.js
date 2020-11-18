
import React from 'react';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import MenuButton from '../menuButton';

export default function NavigationMenu(props) {

  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      //setOpen(false);
    }
  }

  return (
    <React.Fragment>
      <Popper 
        open={props.open} 
        anchorEl={props.anchorElem} 
        placement={'bottom-start'}
        role={undefined} transition disablePortal
        >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom-start' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={props.handleClose}>
                <MenuList autoFocusItem={props.open} onKeyDown={handleListKeyDown}>
                  <MenuButton onClick={props.handleClose}>PLACEHOLDER</MenuButton>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}
