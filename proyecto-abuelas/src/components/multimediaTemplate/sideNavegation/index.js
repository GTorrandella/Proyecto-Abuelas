import React from 'react';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SideItem from './sideItem'

export default function SideNavegation(props) {
    
    const { activity, sideElem } = props
    const videoElem = sideElem ? sideElem.filter(elem => elem.tipo === 'VIDEO') : []
    const audioElem = sideElem ? sideElem.filter(elem => elem.tipo === 'AUDIO') : []
    const photoElem = sideElem ? sideElem.filter(elem => elem.tipo === 'PHOTO') : []
    const fileElem = sideElem ? sideElem.filter(elem => elem.tipo === 'FILE') : []
    
    return (
        <React.Fragment>
            <Container
                style={{
                    borderLeftStyle: 'solid',
                    marginTop: '5px'
                }}>
                <Typography>{activity ? activity['nombre'] : ''}</Typography>
                <List component="nav">
                    <SideItem title="Videos" items={videoElem} path='/video/' />
                    <SideItem title="Audios" items={audioElem} path='/audio/' />
                    <SideItem title="Fotos" items={photoElem} path='/imagen/' />
                    <SideItem title="Documentos" items={fileElem} path='/archivo/' />
                </List>
            </Container>
        </React.Fragment>
  );
}