import React from 'react';
import Grid from '@material-ui/core/Grid'

export default function FooterBody(props) {

  return (
    <React.Fragment>
      <Grid container className={props.className.root}>
        <Grid item xs>
          <div className='row'>
            PLACEHOLDER
          </div>
        </Grid>
        <Grid item xs>
          <div className='row'>
            PLACEHOLDER
          </div>
        </Grid>
        <Grid item xs>
          <div className='row'>
            PLACEHOLDER
          </div>
        </Grid>
        <Grid item xs>
          <div className='row'>
            PLACEHOLDER
          </div>
        </Grid>
        <Grid item xs>
          <div className='row'>
            PLACEHOLDER
          </div>
        </Grid>
        <Grid item xs>
          <div className='row'>
            PLACEHOLDER
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}