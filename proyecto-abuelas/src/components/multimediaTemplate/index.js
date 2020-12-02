import React from 'react';
import { Container, Grid } from '@material-ui/core'
import SideNavegation from './sideNavegation'

export default function Base(props) {

    const { activity, multimedia } = props

    return (
        <React.Fragment>
            <Container maxWidth='md' style={{
                backgroundColor: '#F1F1F1',
            }}>
            <Grid container alignItems='stretch'> 
                <Grid item xs={2}>
                    <SideNavegation activity={activity} />
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={9}>
                    {multimedia}
                </Grid>
            </Grid>
            </Container>
        </React.Fragment>
  );
}