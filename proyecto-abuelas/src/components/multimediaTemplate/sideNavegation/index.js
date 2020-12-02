import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

export default function SideNavegation(props) {

    const { activity, videos, audios, photos, documents} = props.activity
    const [open, setOpen] = React.useState(true);
  
    const handleClick = () => {
      setOpen(!open);
    };

    return (
        <React.Fragment>
            <List
            component="nav"
            style={{
                borderLeftStyle: 'solid',
                marginTop: '5px'
            }}
            >
                <ListItem button>
                    <ListItemText primary="Videos" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Audios" />
                </ListItem>
                <ListItem button onClick={handleClick}>
                    <ListItemText primary="Fotos" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" 
                        style={{
                            paddingLeft: '15px'
                        }}>
                        <ListItem button>
                            <ListItemText primary="Starred" />
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button>
                    <ListItemText primary="Documentos" />
                </ListItem>
            </List>
        </React.Fragment>
  );
}