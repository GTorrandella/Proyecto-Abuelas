import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

export default function SideItem(props) {
    const { title, items } = props
    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen(!open);
    };

    return (
        <React.Fragment>
            {(items.length === 0) ? 
            (<ListItem >
                <ListItemText primary={title} />
            </ListItem>)
            :
            (<div>
                <ListItem button onClick={handleClick}>
                    <ListItemText primary={title} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    {
                        items.map((item, key) => {
                            return (
                            <List component="div" 
                                style={{
                                    paddingLeft: '15px'
                                }}>
                                <ListItem button>
                                    <ListItemText primary={item.nombre}/>
                                </ListItem>
                            </List>
                        )})
                    }                    
                </Collapse>
            </div>)
            }
        </React.Fragment>
  );
}