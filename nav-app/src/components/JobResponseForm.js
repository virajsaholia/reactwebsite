import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function JobResponseForm() {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/jobresponse')
      .then(response => {
        setFetchedData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const convertBase64ToFile = (base64String) => {
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);

for (let i = 0; i < byteCharacters.length; i++) {
  byteNumbers[i] = byteCharacters.charCodeAt(i);
}

const byteArray = new Uint8Array(byteNumbers);
return new Blob([byteArray], { type: 'application/pdf' });
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/jobresponse/${id}`);
      if (response.data.status === 'SUCCESS') {
        setFetchedData(prevData => prevData.filter(item => item._id !== id));
        console.log('Job deleted successfully:', response.data);
      } else {
        console.log('Failed to delete job:', response.data);
      }
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Applied For:</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Cover Letter</TableCell>
              <TableCell>File</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fetchedData.map(data => (
              <TableRow key={data._id}>
                <TableCell>{data.jobName}</TableCell>
                <TableCell>{data.name}</TableCell>
                <TableCell><Link to={`mailto:${data.email}`}>{data.email}</Link></TableCell>
                <TableCell><Link to={`tel:+91${data.phone}`}>{data.phone}</Link></TableCell>
                <TableCell>{data.coverletter}</TableCell>
                <TableCell>
                  <a
                    href={URL.createObjectURL(convertBase64ToFile(data.Resume))}
                    target="_blank"
                    rel="noopener noreferrer"

              >View File
              </a>
            </TableCell>
            <TableCell>
              <IconButton onClick={() => handleDelete(data._id)} color="secondary">
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</div>
  );
}

export default JobResponseForm;