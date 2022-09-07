import React from 'react';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import {
  firstYearStyle,
  secondYearStyle,
  thirdYearStyle,
  fourthYearStyle,
  fifthYearStyle,
  sixthYearStyle
} from '../../../styles/timeline'

export default function TimelineYear(props){

  const firstYear = firstYearStyle();
  const secondYear = secondYearStyle();
  const thirdYear = thirdYearStyle();
  const fourthYear = fourthYearStyle();
  const fifthYear = fifthYearStyle();
  const sixthYear = sixthYearStyle();

  const getColor = (yearBlockNumber) => {
    switch(yearBlockNumber%6){
      case 0:
        return sixthYear;
      case 1:
        return firstYear;
      case 2:
        return secondYear;
      case 3:
        return thirdYear;
      case 4:
        return fourthYear;
      case 5:
      default:
        return fifthYear;
    }
  }

  const finalColor = getColor(props.yearBlockNumber);
    
  return (<React.Fragment>
          <TimelineItem>
              <TimelineSeparator>
                  <TimelineDot variant="outlined" className={finalColor.dot}>
                    <div>{props.children}</div>
                  </TimelineDot>
                  <TimelineConnector className={finalColor.line}/>
              </TimelineSeparator>
              <TimelineContent />
          </TimelineItem>
        </React.Fragment>)
}
