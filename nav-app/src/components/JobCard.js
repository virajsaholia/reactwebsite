// src/components/JobCard.js
import React from 'react';

const JobCard = ({ imgSrc, title, text, link }) => {
  return (
    <div className='careerJobCard'>
      <img className='job-image' src={imgSrc} alt="" />
      <h6 className='JobTitle'>{title}</h6>
      <p className='job_text'>{text}</p>
      <a href={link}>More Details <i className='fas fa-arrow-right'></i></a>
    </div>
  );
}

export default JobCard;
