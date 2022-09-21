import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';



const  LeftPositionedTimeline =({maker})=>{
const shos = maker.map((element,id)=>{
    return(
      <TimelineItem key={id} >
        <TimelineSeparator>
          <TimelineDot  color={element}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
    )
})


  return (<Timeline position="alternate">
  {shos}

  </Timeline>
    
  );
}
export default LeftPositionedTimeline;