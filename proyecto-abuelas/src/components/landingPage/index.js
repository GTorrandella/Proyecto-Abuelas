import * as React from 'react';
import Container from '@material-ui/core/Container';
import { landingPageStyle } from '../../styles/landingPage'

export default function LandingPage() {
  const classes = landingPageStyle();

  return (
    <React.Fragment>
      <div>
        <Container className={classes.grid} maxWidth="md">
          <img className={classes.image}
            src={'/landing/dibujoAbuelas.png'} 
            alt={'Abuelas de Plaza de Mayo'}
            />
          <img className={classes.image}
            src={'/landing/lemaAbuelas.png'} 
            alt={'Memoria, Verdad y Justicia'}
            />
        </Container>
      </div>
    </React.Fragment>
  );
}