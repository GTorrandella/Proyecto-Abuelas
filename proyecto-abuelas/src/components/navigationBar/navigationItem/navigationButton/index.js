import React from 'react';
import Button from '@material-ui/core/Button';
import { buttonStyle } from '../../../../styles/navigationBar';

export default function NavigationButton (props){
  const classes = buttonStyle();

  return(
    <React.Fragment>
      <Button
        className={classes.root}
        aria-controls={props.open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={props.handleToggle}>
          {props.children}
      </Button>
    </React.Fragment>
  )
}