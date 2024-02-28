import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const IconsContainer = styled('div')`
    position: relative;
    margin-bottom: 10px; /* Adjust margin as needed */
`;

const EditIcon = styled(Edit)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
    position: absolute;
    top: 0;
    right: 60px; /* Adjust the right position as needed */
`;

const DeleteIcon = styled(Delete)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
    position: absolute;
    top: 0;
    right: 0; /* Adjust the right position as needed */
`;

// ... (imports)

const DetailViews = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate(); // Add this line to get the navigate function

    useEffect(() => {
        const fetchPostDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/posts/${id}`);
                console.log('API Response:', response);

                if (response.ok) {
                    const data = await response.json();

                    // Check if the response has a data property
                    if (data && data.data) {
                        setPost(data.data); // Use the data property directly
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

        fetchPostDetails();
    }, [id]);

    const handleEditClick = () => {
        navigate(`/update/${post._id}`); // Navigate to the UpdatePost page
    };

    const handleDeleteClick = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/posts/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // Post successfully deleted, redirect to home or another page
                navigate('/');
            } else {
                console.error('Failed to delete post. Status:', response.status);
            }
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (
        <div>
            {post ? (
                <>
                    <IconsContainer>
                        <EditIcon color="primary" onClick={handleEditClick} />
                        <DeleteIcon color="error" onClick={handleDeleteClick} />
                    </IconsContainer>
                    {/* Use a base64 data URL for the image */}
                    <img src={`data:image/png;base64,${post.image}`} alt={post.title} />
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    <p>{post.innerContent}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default DetailViews;
