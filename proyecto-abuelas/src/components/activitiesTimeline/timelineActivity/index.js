import { Box, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import React from 'react';


const useStyles = makeStyles((theme) => ({
  paper: {
      padding: '6px 16px',
  },
  secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
  },
}));

export default function TimelineActivity(props){
  const classes = useStyles();
  if(props.number%2 === 0){
    return <React.Fragment>
      <TimelineItem>
        <TimelineOppositeContent style={{margin: '0px', padding: '0px'}}>
          <Box display='flex' alignContent='right' alignItems='center' flexDirection='row-reverse'>
            <spam className={props.className.photo}/>
            <Box className={props.className.blockLeft}>
              <Typography>
                {props.children[0]}
              </Typography>
              <Typography>
                {props.children[1]}
              </Typography>
            </Box>
          </Box>
        </TimelineOppositeContent>
        <TimelineSeparator style={{margin: '0px', padding: '0px'}}>
          <img 
            style={{paddingRight: '23px', height: '70px'}}              
            src={'/timeline/'+props.number%6+'/timeline-left.png'} />
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
            src={'/timeline/'+props.number%6+'/timeline-right.png'} />
        </TimelineSeparator>
        <TimelineContent style={{margin: '0px', padding: '0px'}}>
          <Box display='flex' alignContent='left' alignItems='center' flexDirection='row'>
            <spam className={props.className.photo}/>
            <Box className={props.className.blockRight}>
              <Typography>
                {props.children[0]}
              </Typography>
              <Typography>
                {props.children[1]}
              </Typography>
            </Box>
          </Box>
        </TimelineContent>
      </TimelineItem>
    </React.Fragment>
  }
}
