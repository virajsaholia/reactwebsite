import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import axios from "axios";
import './CareerForm.css';

function CareerForm() {
  const [image, setImage] = useState(null);
  const [jobName, setJobName] = useState("");
  const [numPositions, setNumPositions] = useState(0);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setImage('');
    setJobName('');
    setNumPositions('');

    const formData = new FormData();
    formData.append("jobimg", image);
    formData.append("jobname", jobName);
    formData.append("positionnumber", numPositions);

try {
  const response = await axios.post("http://localhost:8000/webtest", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  console.log("Server Response:", response.data);
} catch (error) {
  console.error("Error submitting form:", error);
}

console.log("Job Name:", jobName);
console.log("Number of Positions:", numPositions);
  };

  return (
    <Container className="careerForm_container">
      <form className="careerForm" onSubmit={handleSubmit}>
        <Row>
          <Col xs={12}>
            <label>
              Position:
              <input className="careerForm_text"
                type="text"
                value={jobName}
                onChange={(e) => setJobName(e.target.value)}
                required
              />
            </label>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <label>
              Image:
              <input className="careerForm_input"
                type="file"
                onChange={handleImageChange}
                accept="image/*"
                required
              />
            </label>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <label>
              Number of Positions:
              <input className="careerForm_input"
                type="number"
                value={numPositions}
                onChange={(e) => setNumPositions(e.target.value)}
                required
              />
            </label>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <button className="careerForm_btn" type="submit">Submit</button>
          </Col>
        </Row>
      </form>
    </Container>
  );
}

export default CareerForm;