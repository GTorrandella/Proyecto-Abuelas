import * as React from 'react';
import Container from '@material-ui/core/Container';
import { landingPageStyle } from '../../styles/landingPage'

export default function LandingPage() {
  const classes = landingPageStyle();

  return (
    <React.Fragment>
      <div>
        <Container className={classes.grid} maxWidth="ld">
          <img className={classes.image}
            src={'/landing/dibujoAbuelas.png'} 
            alt={'UNDAV Universidad Nacional de Avellaneda'}
            />
          <img className={classes.image}
            src={'/landing/lemaAbuelas.png'} 
            alt={'UNDAV Universidad Nacional de Avellaneda'}
            />
        </Container>
      </div>
    </React.Fragment>
  );
}