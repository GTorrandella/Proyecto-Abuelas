import React from 'react';
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

export default function SideItem(props) {
    const { title, items, path, classes } = props
    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen(!open);
    };

    return (
        <React.Fragment>
            {(items.length === 0) ? 
            (<ListItem>
                <ListItemText
                disableTypography={true}
                style={{
                    fontFamily: 'Anton',
                    letterSpacing: '0.07rem',
                    color: "dimgrey",
                }} 
                primary={title} />
            </ListItem>)
            :
            (<div>
                <ListItem button onClick={handleClick}>
                    <ListItemText
                    disableTypography={true}
                    style={{
                        fontFamily: 'Anton',
                        letterSpacing: '0.07rem',
                        color: "black",
                    }}
                    primary={title} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" 
                        style={{
                            paddingLeft: '15px'
                        }}>
                        {items.map((item, key) => {
                            return (
                                <ListItem button>
                                    <Link to={path + item.id}>
                                        <ListItemText
                                        disableTypography={true}
                                        style={{
                                            fontFamily: 'Anton',
                                            letterSpacing: '0.07rem',
                                            color: "black",
                                        }}
                                        primary={item.nombre}/>
                                    </Link>
                                </ListItem>
                        )})}
                        </List>       
                </Collapse>
            </div>)
            }
        </React.Fragment>
  );
}