import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Job_form.css';

const JobForm = () => {
  const { jobName } = useParams();
  const [name, setName] = useState("");
  const [Resume, setResume] = useState(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [coverletter, setCoverletter] = useState("");

  const [currentJobName, setCurrentJobName] = useState('');
  const [jobs, setJobs] = useState([]);

  const handleResumeChange = (e) => {
    const selectedResume = e.target.files[0];
    setResume(selectedResume);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

const formDataToSend = new FormData();
formDataToSend.append("jobName", jobName);
formDataToSend.append("name", name);
formDataToSend.append("email", email);
formDataToSend.append("phone", phone);
formDataToSend.append("coverletter", coverletter);
formDataToSend.append("Resume", Resume);

try {
  const response = await axios.post("http://localhost:8000/jobresponse", formDataToSend, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  console.log("Server Response:", response.data);
  setName('');
  setResume(null);
  setEmail('');
  setPhone('');
  setCoverletter('');
} catch (error) {
  console.error("Error submitting form:", error);
}
  };

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

  useEffect(() => {
    const jobExists = isValidJobName(jobName);
    if (!jobExists) {
    } else {
      setCurrentJobName(jobName);
    }
  }, [jobName, jobs]);

  const isValidJobName = (name) => {
    return jobs.some(job => job.jobname === name);
  };

  return (
    <div>
      <h2 className='job_form_position'>{currentJobName}</h2>
      <form className="job-form" onSubmit={handleSubmit}>
        <h2 className="job_form_head">Apply For This Position</h2>
        <div>
          <label>
            Applying For:
          </label>
          <input
            className='job_textfield'
            type="text"
            value={jobName}
            disabled
          />
        </div>
        <div>
          <label>
            Full Name:
          </label>
          <input
            className='job_textfield'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>
            Email:
          </label>
          <input
            className='job_email'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>
            Phone:
          </label>
          <input
            className='job_phone'
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <label>
            Cover Letter:
          </label>
          <textarea
            className='jobForm_textarea'
            value={coverletter}
            onChange={(e) => setCoverletter(e.target.value)} />
        </div>
        <div>
          <label>
            Upload Resume: (Pdf only)
          </label>
          <input
            className='job_file'
            type="file"
            onChange={handleResumeChange} />
        </div>
        <button className='job_submit_button' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JobForm;