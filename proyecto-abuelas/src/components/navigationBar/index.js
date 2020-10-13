import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  ButtonBase,
  Container
 } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {
  Col,  Row,
} from 'reactstrap';

class NavigationBar extends React.Component {

  render() {
    return (
      <React.Fragment>

        <Toolbar>
            <Col xs='6' style={{margin: 'auto'}}>
                <ButtonBase style={{
                padding: '0 10px',}}
                >
                Proyectos
                </ButtonBase>
                <ButtonBase style={{
                padding: '0 10px',}}
                >
                Quienes somos
                </ButtonBase>
                <ButtonBase style={{
                padding: '0 10px',}}
                >
                Contacto
                </ButtonBase>
            </Col>
            <Col xs='6' style={{margin: 'auto'}}>
                <ButtonBase>Botones redes sociales</ButtonBase>
            </Col>
        </Toolbar>

      </React.Fragment>

    );
  }

}

export default NavigationBar;