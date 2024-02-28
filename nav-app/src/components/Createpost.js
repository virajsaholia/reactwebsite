// components/CreatePost.js
import React, { useState, useEffect } from 'react';
import { styled, Box, TextareaAutosize, Button, InputBase, FormControl } from '@mui/material';
import {  useLocation } from 'react-router-dom';
import axios from "axios"

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));


const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`;

const Textarea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    margin-top: 10px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`;
function CreatePost() {
    const [blogimg, setBlogImage] = useState(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [innerContent, setInnerContent] = useState("");
    const [post, setPost] = useState({
        categories: 'All'
    });

    const location = useLocation();

    useEffect(() => {
        // Set the category from the query string
        setPost((prevPost) => ({
            ...prevPost,
            categories: decodeURIComponent(location.search?.split('=')[1]) || 'All'
        }));
    }, [location.search]);

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setBlogImage(selectedImage);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setBlogImage('');
        setTitle('');
        setContent('');
        setInnerContent('');

        const formData = new FormData();
        formData.append("image", blogimg);
        formData.append("title", title);
        formData.append("content", content);
        formData.append("innerContent", innerContent);
        formData.append('category', post.categories);
        formData.append('createdDate', new Date().toISOString());

        try {
            const response = await axios.post("http://localhost:8000/api/posts", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log("Server Response:", response.data);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <StyledFormControl>
                    <input
                    placeholder='hello'
                        type="file"
                        id="fileInput"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    <InputTextField
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        name="title"
                        placeholder="Title"
                    />
                    <Button
                        className="createpostbutton"
                        variant="contained"
                        type='submit'
                        color="primary"
                    >
                        Publish
                    </Button>
                </StyledFormControl>

                <Textarea
                    rowsMin={5}
                    value={content}
                    placeholder="Tell your story..."
                    name="content"
                    onChange={(e) => setContent(e.target.value)}

                />

                <Textarea
                    rowsMin={5}
                    placeholder="Add more content..."
                    name="innerContent"
                    value={innerContent}
                    onChange={(e) => setInnerContent(e.target.value)}

                />
            </form>
        </Container>
    );
};


export default CreatePost;
