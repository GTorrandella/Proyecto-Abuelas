import React, {useState, useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Container from '@material-ui/core/Container'
import Timeline from '@material-ui/lab/Timeline';
import {
  getTimeline
} from '../../connector';
import TimelineYear from './timelineYear';
import TimelineActivity from './timelineActivity';

export default function ActivitiesTimeline() {
    
    const [activityList, setActivityList] = useState([]);
    const [hasMore, sethasMore] = useState(false);

    const fillTimelineData = () => {};
    const constructTimeline = () => {
        let currentYear = NaN
        let blockYear = 0
        let timeline = []
        for (let i = 0; i < activityList.length; i++){
            if (currentYear !== activityList[i].year){
                blockYear = blockYear + 1
                currentYear = activityList[i].year
                timeline = timeline.concat([
                    <TimelineYear yearBlockNumber={blockYear}>
                        {activityList[i].year}
                    </TimelineYear>
                ])
            }
            timeline = timeline.concat([
                <TimelineActivity yearBlockNumber={blockYear} timilinePosition={i}>
                    {[activityList[i].nombre, activityList[i].descripcion]}
                </TimelineActivity>
            ])
        }
        return timeline
    };

    useEffect(() => {
        const fetchData = async () => {
            const result = await getTimeline()
            setActivityList(result.result);
        };
        fetchData();  
    }, []);

    return (
        <Container 
            id="scrollableDiv"
            maxWidth='md'
            style={{
            height: '65vh',
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#F1F1F1',
            }}>
            <InfiniteScroll
                dataLength={activityList.length}
                next={fillTimelineData}
                hasMore={hasMore}
                loader={<h4>Cargando más registros...</h4>}
                scrollableTarget="scrollableDiv"
                endMessage={
                    <p style={{ textAlign: "center" }}>
                    <b>No hay más registros</b>
                    </p>
                }>
                <Timeline>
                    {
                        constructTimeline()
                    }
                </Timeline>
            </InfiniteScroll>
        </Container>
    );
}