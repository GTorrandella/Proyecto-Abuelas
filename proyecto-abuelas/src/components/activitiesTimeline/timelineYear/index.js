import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import React from 'react';


export default function TimelineYear(props){
  return <React.Fragment>
          <TimelineItem>
              <TimelineSeparator>
                  <TimelineDot variant="outlined" className={props.className.dot}>
                    <div>{props.children}</div>
                  </TimelineDot>
                  <TimelineConnector className={props.className.line}/>
              </TimelineSeparator>
              <TimelineContent />
          </TimelineItem>
        </React.Fragment>
}
