import * as React from 'react';
import Container from '@material-ui/core/Container';
import { landingPageStyle } from '../../styles/landingPage';
import StringConstants from '../../locale';

export default function LandingPage() {
    
    const strings = StringConstants();
    const classes = landingPageStyle();

    return (
        <React.Fragment>
            <Container className={classes.grid}>
                <img className={classes.image}
                  src={'/landing/dibujoAbuelas.png'} 
                  alt={strings.atl_img_dibujoAbuelas}
                  />
                <img className={classes.image}
                  src={'/landing/lemaAbuelas.png'} 
                  alt={strings.atl_img_lemaAbuelas}
                  />
            </Container>
        </React.Fragment>
    );
}