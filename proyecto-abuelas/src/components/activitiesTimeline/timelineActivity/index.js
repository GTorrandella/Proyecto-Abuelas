import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import React from 'react';
import {
  firstBlockStyle,
  secondBlockStyle,
  thirdBlockStyle,
  fourthBlockStyle,
  fifthBlockStyle,
  sixthBlockStyle
} from '../../../styles/timeline';

export default function TimelineActivity(props){
  const { timilinePosition, yearBlockNumber, children } = props

  const firstBlock = firstBlockStyle();
  const secondBlock = secondBlockStyle();
  const thirdBlock = thirdBlockStyle();
  const fourthBlock = fourthBlockStyle();
  const fifthBlock = fifthBlockStyle();
  const sixthBlock = sixthBlockStyle();

  const getColor = (yearBlockNumber) => {
    switch(yearBlockNumber%6){
      case 0:
        return sixthBlock;
      case 1:
        return firstBlock;
      case 2:
        return secondBlock;
      case 3:
        return thirdBlock;
      case 4:
        return fourthBlock;
      case 5:
      default:
        return fifthBlock;
    }
  }

  const finalColor = getColor(yearBlockNumber)

  if(timilinePosition%2 === 0){
    return <React.Fragment>
      <TimelineItem>
        <TimelineOppositeContent style={{margin: '0px', padding: '0px'}}>
          <Box display='flex' alignContent='right' alignItems='center' flexDirection='row-reverse'>
            <spam className={finalColor.photo}/>
            <Box className={finalColor.blockLeft}>
              <Typography>
                {children[0]}
              </Typography>
              <Typography>
                {children[1]}
              </Typography>
            </Box>
          </Box>
        </TimelineOppositeContent>
        <TimelineSeparator style={{margin: '0px', padding: '0px'}}>
          <img 
            style={{paddingRight: '23px', height: '70px'}}              
            src={'/timeline/'+yearBlockNumber%6+'/timeline-left.png'} />
        </TimelineSeparator>
        <TimelineContent style={{margin: '0px', padding: '0px'}}/>
      </TimelineItem>
    </React.Fragment>
  }
  else{
    return <React.Fragment>
      <TimelineItem>
        <TimelineOppositeContent style={{margin: '0px', padding: '0px'}}/>
        <TimelineSeparator style={{margin: '0px', padding: '0px'}}>
          <img 
            style={{paddingLeft: '24.2px', height: '70px'}}              
            src={'/timeline/'+yearBlockNumber%6+'/timeline-right.png'} />
        </TimelineSeparator>
        <TimelineContent style={{margin: '0px', padding: '0px'}}>
          <Box display='flex' alignContent='left' alignItems='center' flexDirection='row'>
            <spam className={finalColor.photo}/>
            <Box className={finalColor.blockRight}>
              <Typography>
                {children[0]}
              </Typography>
              <Typography>
                {children[1]}
              </Typography>
            </Box>
          </Box>
        </TimelineContent>
      </TimelineItem>
    </React.Fragment>
  }
}
