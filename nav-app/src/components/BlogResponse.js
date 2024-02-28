import React, { useState } from "react";
import { Container, Row, Col } from 'react-grid-system';
import './BlogResponse.css'
import axios from "axios";

function BlogResponse() {
    const [comments, setComments] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");

const handleSubmit = async (event) => {
    event.preventDefault();
    setComments('');
    setName('');
    setEmail('');
    setWebsite('');

    const formData = {
        comments,
        name,
        email,
        website,

    };

    try {
        const response = await axios.post("http://localhost:8000/blogresponse", formData);
        console.log("Server Response:", response.data);
    } catch (error) {
        console.error("Error submitting form:", error);
    }
};
return (
    <section className="Blog_Response_section" >
        <h3 className="Blog_heading" >Leave a reply</h3>
        <Container>
            <form className="blog_response_form" onSubmit={handleSubmit}>
                <Row>
                    <Col lg={12} >
                        <textarea className="blog_response_form_textarea"
                            placeholder="Your Comments"
                            cols={30}
                            rows={7}
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col lg={4} >
                        <input className="blog_response_form_text"
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Col>
                    <Col lg={4} >
                        <input className="blog_response_form_text"
                            type="text"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Col>
                    <Col lg={4} >
                        <input className="blog_response_form_text"
                            type="text"
                            placeholder="Website"
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                        />
                    </Col>
                </Row>
                <input
                    type="checkbox"
                />
                <span className="blog_response_checkbox_text" >Save my name, email, and website in this browser for the next time I comment.</span><br />
                <button className='Blog_Response_btn' >
                    Post Comment
                </button>
            </form>
        </Container>
    </section>
)
}
export default BlogResponse;