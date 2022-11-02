import React from 'react';
import { useHistory } from "react-router-dom";
import { Button, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { baseStyle } from '../../../styles/navigationBar';

export default function NavigationSeachBar(props) {
  const classes = baseStyle();
  const history = useHistory(); 
  const [text, setText] = React.useState(null);
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleClick = () => {
    if(text !== null && text.trim() !== ''){
      history.push('/busqueda?query='+text);
    }
  };
  const handleEnter = (event) => {
    if(event.key === 'Enter'){
      handleClick()
    }
  }

  return (
    <div className={classes.text}>
      <InputBase
        className={classes.input}
        placeholder={props.children[0]}
        onChange={handleChange}
        onKeyUp={handleEnter}
        inputProps={{ 'aria-label': props.children[0], ...classes.input}}
      />
      <Button 
        className={classes.buttom}
        aria-label="search"
        onClick={handleClick}
        onEnter>
        <SearchIcon />
      </Button>
    </div>
  );
}