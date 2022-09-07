import React from 'react';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SideItem from './sideItem'

export default function SideNavegation(props) {
    
    const { activity, sideElem, classes } = props
    const videoElem = sideElem ? sideElem.filter(elem => elem.tipo === 'VIDEO') : []
    const audioElem = sideElem ? sideElem.filter(elem => elem.tipo === 'AUDIO') : []
    const photoElem = sideElem ? sideElem.filter(elem => elem.tipo === 'PHOTO') : []
    const fileElem = sideElem ? sideElem.filter(elem => elem.tipo === 'FILE') : []
    
    

    return (
        <React.Fragment>
            <Container
                className={classes.base}>
                <Typography className={classes.text}>
                    {activity ? activity['nombre'] : 'Entrevista con el Chavo del 8'}
                </Typography>
                <List component="nav" className={classes.list}>
                    <SideItem classes={classes.item} title="Videos" items={videoElem} path='/video/' />
                    <SideItem classes={classes.item} title="Audios" items={audioElem} path='/audio/' />
                    <SideItem classes={classes.item} title="Fotos" items={photoElem} path='/imagen/' />
                    <SideItem classes={classes.item} title="Documentos" items={fileElem} path='/archivo/' />
                </List>
            </Container>
        </React.Fragment>
  );
}