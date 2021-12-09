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
    return <React.Fragment>
          <TimelineItem>
            <TimelineOppositeContent style={{margin: '0px', padding: '0px'}}>
              <Box display='flex' alignContent='right' alignItems='center' flexDirection='row-reverse'>
                <spam class={props.className.connector}/>
                <spam className={props.className.photo}/>
                <Box className={props.className.blockLeft}>
                  <Typography>
                    TÍTULO
                  </Typography>
                  <Typography>
                    DESCRIPCIÓN MUCHO MÁS LARGA
                  </Typography>
                </Box>
              </Box>
            </TimelineOppositeContent>
            <TimelineSeparator style={{margin: '0px', padding: '0px'}}>
              <TimelineConnector className={props.className.line} style={{borderBottomLeftRadius: '100%'}}/>
              <TimelineDot className={props.className.dot}/>
              <TimelineConnector className={props.className.line} style={{borderTopLeftRadius: '100%'}}/>
            </TimelineSeparator>
            <TimelineContent style={{margin: '0px', padding: '0px'}}/>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent style={{margin: '0px', padding: '0px'}}/>
            <TimelineSeparator style={{margin: '0px', padding: '0px'}}>
              <TimelineConnector className={props.className.line} style={{borderBottomRightRadius: '100%'}}/>
              <TimelineDot className={props.className.dot}/>
              <TimelineConnector className={props.className.line}  style={{borderTopRightRadius: '100%'}}/>
            </TimelineSeparator>
            <TimelineContent style={{margin: '0px', padding: '0px'}}>
              <Box display='flex' alignContent='left' alignItems='center' flexDirection='row'>
                <spam class={props.className.connector}/>
                <spam className={props.className.photo}/>
                <Box className={props.className.blockRight}>
                  <Typography>
                    TÍTULO MUCHO MÁS LARGO
                  </Typography>
                  <Typography>
                    DESCRIPCIÓN
                  </Typography>
                </Box>
              </Box>
            </TimelineContent>
          </TimelineItem>
        </React.Fragment>
}
