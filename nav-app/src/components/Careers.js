import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Careers.css';
import { Link } from 'react-router-dom';
function JobCard({ imgSrc, title, text, link }) {
  return (
    <Link to={link}>
      <div className='careerJobCard'>
        <img className='job-image' src={`data:image/png;base64,${imgSrc}`} alt="" />
        <h6 className='JobTitle'>{title}</h6>
        <p className='job_text'>{text}</p>
        More Details <span><i className='fas fa-arrow-right'></i></span>
      </div>
    </Link>
  );
}

function CareerCards() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/careerSchema')
      .then(response => {
        console.log(response.data);
        setJobs(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching job data:', error);
      });
  }, []);

  return (
    <section className='CareerCards'>
      <div className='careers_heading'>
        <p className='careers_head'>JOB OPENING</p>
        <p className='careers_headtext'>Join Us For Professional Growth And A Positive Work Environment.</p>
      </div>
      <div className='job-card-container'>
        {jobs.map(job => (
          <Link to={`/job/job_form/${job.jobname}`} key={job._id}>
            <JobCard
              imgSrc={job.jobimg}
              title={job.jobname}
              text={`Position: ${job.positionnumber}`}
              link={`/job/job_form/${job.jobname}`}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CareerCards;