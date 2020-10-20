import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

export default function MenuButton(props) {

  return(
    <React.Fragment>
      <MenuItem
        style={{
          fontFamily: 'Anton',
        }}>
        {props.children}
      </MenuItem> 
    </React.Fragment>
  )
}