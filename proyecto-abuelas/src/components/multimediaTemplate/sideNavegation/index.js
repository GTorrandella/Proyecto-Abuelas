import React from 'react';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SideItem from './sideItem'
import { Link } from 'react-router-dom';
import StringConstants from '../../../locale';

export default function SideNavegation(props) {

  const { activity, sideElem, classes } = props;
  const videoElem = sideElem ? sideElem.filter(elem => elem.tipo === 'VIDEO') : [];
  const audioElem = sideElem ? sideElem.filter(elem => elem.tipo === 'AUDIO') : [];
  const photoElem = sideElem ? sideElem.filter(elem => elem.tipo === 'PHOTO') : [];
  const fileElem = sideElem ? sideElem.filter(elem => elem.tipo === 'FILE') : [];
  const strings = StringConstants();

  return (
    <React.Fragment>
      <Container
        className={classes.base}>
        <Link to={activity ? '/actividad/' + activity['id'] : ''}>
          <Typography className={classes.text}>
            {activity ? activity['nombre'] : ''}
          </Typography>
        </Link>
        <List component="nav" className={classes.list}>
          <SideItem classes={classes.item} title={strings.videos} items={videoElem} path='/video/' />
          <SideItem classes={classes.item} title={strings.audio} items={audioElem} path='/audio/' />
          <SideItem classes={classes.item} title={strings.photos} items={photoElem} path='/imagen/' />
          <SideItem classes={classes.item} title={strings.documents} items={fileElem} path='/archivo/' />
        </List>
      </Container>
    </React.Fragment>
  );
}