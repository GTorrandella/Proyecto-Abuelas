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
                    borderColor: '#F5AD1D',
                    borderLeftStyle: 'solid',
                    marginTop: '5px',
                    height: '65vh',
                }}>
                <Typography style={{
                    fontFamily: 'Anton',
                    fontSize: '1.2rem',
                    letterSpacing: '1px',
                    color: 'black',
                    textTransform: 'uppercase',
                    borderBottomStyle: 'solid',
                    borderColor: '#DC9B1A',
                }}>
                    {activity ? activity['nombre'] : 'Entrevista con el Chavo del 8'}
                </Typography>
                <List component="nav" 
                style={{
                    height: '80%',
                    overflow: 'auto',
                }}>
                    <SideItem title="Videos" items={videoElem} path='/video/' />
                    <SideItem title="Audios" items={audioElem} path='/audio/' />
                    <SideItem title="Fotos" items={photoElem} path='/imagen/' />
                    <SideItem title="Documentos" items={fileElem} path='/archivo/' />
                </List>
            </Container>
        </React.Fragment>
  );
}