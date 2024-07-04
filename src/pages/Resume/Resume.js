import React from 'react';
import './Resume.css';
import { Grid, Typography } from "@mui/material";
import resumedata from '../../utils/resumedata';
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline/Timeline';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';

const Resume = () => {
  return (
    <>
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_text'>About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6' className='aboutme_text'>{resumedata.about}</Typography>
        </Grid>
      </Grid>

      <Grid container className='section'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_text'>Resume</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container className='resume_timeline'>
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Work Experience" icon={<WorkIcon />}>
                {resumedata.experience.map((experience, index) => (
                  <TimelineItem key={index}>
                    <CustomTimelineSeparator />
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_title'>{experience.title}</Typography>
                      <Typography variant="caption" className='timeline_date'>{experience.date}</Typography>
                      <Typography variant='body2' className='timeline_description'>{experience.Description}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Education" icon={<SchoolIcon />}>
                {resumedata.educations.map((education, index) => (
                  <TimelineItem key={index}>
                    <CustomTimelineSeparator />
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_title'>{education.title}</Typography>
                      <Typography variant="caption" className='timeline_date'>{education.date}</Typography>
                      <Typography className='timeline_university'>{education.university}</Typography>
                      <Typography variant='body2' className='timeline_description'>{education.Description}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container className='section'></Grid>
      <Grid container className='section'></Grid>
      <Grid container className='section'></Grid>
    </>
  );
};

export default Resume;
