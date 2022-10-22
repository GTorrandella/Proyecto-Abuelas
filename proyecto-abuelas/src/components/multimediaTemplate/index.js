import React, {useState, useEffect} from 'react';
import {
    getActivity,
    getActivityByMultimediaId,
    getMultimediaByActivityId
} from '../../connector';
import { Container, Grid } from '@material-ui/core'
import SideNavegation from './sideNavegation'

export default function Base(props) {
    const { multimedia, multimediaId, activityId, classes } = props
    const [activity, setActivity] = useState(null);
    const [multimediaList, setMultimediaList] = useState(null);

    useEffect(() => {
        const fetchDataMultimedia = async () => {
            const result = await getActivityByMultimediaId(multimediaId)
            setActivity(result);
        };
        if(multimediaId) {
            fetchDataMultimedia();
        }
        const fetchDataActivity = async () => {
            const result = await getActivity(activityId)
            setActivity(result);
        };
        if(activityId) {
            fetchDataActivity();
        }
    }, [multimediaId, activityId]);
 
    useEffect(() => {
        const fetchData = async () => {
            const result = await getMultimediaByActivityId(activity['id'])
            setMultimediaList(result.result);
        };
        if (activity){
            fetchData();
        }
    }, [activity]);

    return (
        <React.Fragment>
            <Container maxWidth='md' className={classes.base}>
                <Grid container alignItems='stretch'> 
                    <Grid item xs={3}>
                        <SideNavegation 
                        classes={classes.sideNav}
                        activity={activity} sideElem={multimediaList}/>
                    </Grid>
                    <Grid item xs={9}>
                        {multimedia}
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
  );
}