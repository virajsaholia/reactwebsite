import React, { useState, useEffect } from 'react';
import { Box, styled, TextareaAutosize, Button, FormControl, InputBase } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

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

const StyledTextArea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`;

const UpdatePost = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [post, setPost] = useState({
        title: '',
        content: '',
        innerContent: '',
        image: '', // Update the property name to match your server response
    });

    const [file, setFile] = useState('');

    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/posts/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    if (data && data.data) {
                        setPost(data.data);
                    } else {
                        console.error('Invalid data format:', data);
                    }
                } else {
                    console.error('Failed to fetch post details. Status:', response.status);
                }
            } catch (error) {
                console.error('Error fetching post details:', error);
            }
        };

        fetchData();
    }, [id]);

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setFile(selectedImage);
    };

    const updateBlogPost = async () => {
        try {
            const data = new FormData();
            data.append('title', post.title);
            data.append('content', post.content);
            data.append('image', file);
            data.append('innerContent', post.innerContent);

            const response = await fetch(`http://localhost:8000/api/posts/${id}`, {
                method: 'PUT',
                body: data,
            });

            if (response.ok) {
                const updatedPost = await response.json();
                console.log('Updated Post:', updatedPost);
                // You can perform any additional actions after successful update
                navigate(`/Categories`);
            } else {
                console.error('Failed to update post. Status:', response.status);
            }
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };

    return (
        <Container>
            <Image src={post.image || url} alt="post" />

            <StyledFormControl>
                <input
                placeholder='hello'
                    type="file"
                    id="fileInput"
                    onChange={handleImageChange}
                />
                <InputTextField
                    name="title"
                    placeholder="Title"
                    value={post.title}
                    onChange={(e) => setPost({ ...post, title: e.target.value })}
                />
                <Button variant="contained" color="primary" onClick={updateBlogPost}>
                    Update
                </Button>
            </StyledFormControl>

            <StyledTextArea
                rowsMin={5}
                placeholder="Tell your story..."
                name="content"
                value={post.content}
                onChange={(e) => setPost({ ...post, content: e.target.value })}
            />
            <StyledTextArea
                rowsMin={5}
                placeholder="Add more content..."
                name="innerContent"
                value={post.innerContent}
                onChange={(e) => setPost({ ...post, innerContent: e.target.value })}
            />
        </Container>
    );
};

export default UpdatePost;
