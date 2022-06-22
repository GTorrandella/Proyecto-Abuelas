import React from 'react';
import TimelineYear from '../timelineYear';
import TimelineActivity from '../timelineActivity';
import {
  firstBlockStyle,
  firstYearStyle,
  secondBlockStyle,
  secondYearStyle,
  thirdBlockStyle,
  thirdYearStyle,
  fourthBlockStyle,
  fourthYearStyle,
  fifthBlockStyle,
  fifthYearStyle,
  sixthBlockStyle,
  sixthYearStyle
} from '../../../styles/timeline'
import TimelineItem from '@material-ui/lab/TimelineItem';


export default function TimelinePart(props){

  const firstYear = firstYearStyle();
  const firstBlock = firstBlockStyle();
  const secondYear = secondYearStyle();
  const secondBlock = secondBlockStyle();
  const thirdYear = thirdYearStyle();
  const thirdBlock = thirdBlockStyle();
  const fourthYear = fourthYearStyle();
  const fourthBlock = fourthBlockStyle();
  const fifthYear = fifthYearStyle();
  const fifthBlock = fifthBlockStyle();
  const sixthYear = sixthYearStyle();
  const sixthBlock = sixthBlockStyle();

  const getColor = (number) => {
    switch(number%6){
      case 0:
        return {year: sixthYear, block: sixthBlock};
      case 1:
        return {year: firstYear, block: firstBlock}
      case 2:
        return {year: secondYear, block: secondBlock};
      case 3:
        return {year: thirdYear, block: thirdBlock};
      case 4:
        return {year: fourthYear, block: fourthBlock};
      case 5: 
      default:
        return {year: fifthYear, block: fifthBlock};
    }
  }

  const finalColor = getColor(props.id);
    
  return (<React.Fragment>
          <TimelineYear className={finalColor.year}>
            2020
          </TimelineYear>
          <TimelineActivity 
            className={finalColor.block}
            number={props.id}>
              {["NOMBRE", "probando"]}
          </TimelineActivity>
        </React.Fragment>)
}
