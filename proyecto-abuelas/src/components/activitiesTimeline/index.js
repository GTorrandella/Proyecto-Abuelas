import React, {useState, useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Container from '@material-ui/core/Container'
import Timeline from '@material-ui/lab/Timeline';
import {
  getTimeline
} from '../../connector';
import TimelinePart from './timelinePart';

export default function ActivitiesTimeline() {
    
    const [activityList, setActivityList] = useState([]);
    const [itemsOnDisplay, setItemsOnDisplay] = useState(Array.from({ length: 1 }));
    const [hasMore, sethasMore] = useState(true);

    const fetchMoreData = () => {
        if (itemsOnDisplay.length >= 8) {
        sethasMore(false);
        return;
        }
        setTimeout(() => {
            setItemsOnDisplay(
                itemsOnDisplay.concat(Array.from({ length: 1 }))
            );
        }, 500);
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
                dataLength={itemsOnDisplay.length}
                next={fetchMoreData}
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
                    itemsOnDisplay.map((i, index) => {
                                                return <><TimelinePart id={1}/>
                                                <TimelinePart id={2}/>
                                                <TimelinePart id={3}/>
                                                <TimelinePart id={4}/>
                                                <TimelinePart id={5}/>
                                                <TimelinePart id={6}/>
                        </>
                    })
                    }
                </Timeline>
            </InfiniteScroll>
        </Container>
    );
}