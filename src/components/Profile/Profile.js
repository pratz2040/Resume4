import React from 'react';
import { Typography } from '@mui/material';
import { TimelineItem, TimelineContent } from '@mui/lab';
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline';
import './Profile.css';
import resumeData from '../../utils/resumedata';
import PersonIcon from '@mui/icons-material/Person';
import CustomButton from '../Button/Button';
import GetAppIcon from '@mui/icons-material/GetApp';
import Resume from '../../assets/images/Resume.pdf'; // Import the PDF file

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className='timeline_content'>
      {link ? (
        <Typography className='timelineItem_text'>
          <span>{title}</span>:
          <a href={link} target="_blank" rel="noopener noreferrer">
            {text}
          </a>
        </Typography >
      ) : (
        <Typography className='timelineItem_text'>
          <span>{title}:</span> {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'Resume.pdf';
    link.click();
  };

  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>

      <figure className="profile_image">
        <img src={require('../../assets/images/1718436029193.jpg')} alt="" />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<PersonIcon />}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Title" text={resumeData.title} />
          <CustomTimelineItem title="Email" text={resumeData.email} />
          <CustomTimelineItem title="Phone" text={resumeData.phone} />
          {Object.keys(resumeData.Social).map((key) => (
            <CustomTimelineItem 
              key={key} 
              title={key} 
              text={resumeData.Social[key].text} 
              link={resumeData.Social[key].link} 
            />
          ))}
        </CustomTimeline>
        <br />
        
        <CustomButton text="Download_CV" icon={<GetAppIcon />} onClick={handleDownloadCV} /> {/* Handle download */}
      </div>
    </div>
  );
};

export default Profile;
