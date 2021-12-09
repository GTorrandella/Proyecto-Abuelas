import React from 'react';
import Button from '@material-ui/core/Button';

export default function NavigationButton (props){
  return(
    <React.Fragment>
      <Button
        style={{
          letterSpacing: '0.1rem',
          fontFamily: 'Anton',
        }}
        aria-controls={props.open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={props.handleToggle}>
          {props.children}
      </Button>
    </React.Fragment>
  )
}