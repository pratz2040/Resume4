import React from 'react';
import './Timeline.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import PersonIcon from '@mui/icons-material/Person';
import { Typography } from '@mui/material';

const CustomTimeline = ({ title, icon, children }) => {
  return (
    <Timeline className='timeline'>
      {/* Item header */}
      <TimelineItem className='timeline_firstitem'>
        <TimelineSeparator>
          <TimelineDot className='timeline_dot_header'>
            <PersonIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant='h6' className='timeline_header'>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {/* Render children timeline items */}
      {children}
    </Timeline>
  );
};

export const CustomTimelineSeparator = () => {
  return (
    <TimelineSeparator className='seperator_padding'>
      <TimelineDot className='timeline_dot' />
      <TimelineConnector />
    </TimelineSeparator>
  );
};

export default CustomTimeline;
