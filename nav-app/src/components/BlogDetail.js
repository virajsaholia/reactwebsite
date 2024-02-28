import { React, useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate, useParams } from 'react-router-dom';
import "./BlogDetail.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogResponse from './BlogResponse';


// ... other imports ...

function BlogDetail() {
    const [categories, setCategories] = useState([]);
    const [post, setPost] = useState(null);
    const [category, setCategory] = useState(null);  // New state to hold the category data
    const [searchParams] = useSearchParams();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/categories/${id}`);
                const data = await response.json();
                setCategories(data.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchPostDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/posts/${id}`);
                console.log('API Response:', response);

                if (response.ok) {
                    const data = await response.json();

                    // Check if the response has a data property
                    if (data && data.data) {
                        setPost(data.data);

                        // Check if categoryId is defined
                        if (data.data.categoryId !== undefined) {
                            // Fetch category details based on categoryId
                            const categoryId = data.data.categoryId;
                            const categoryResponse = await fetch(`http://localhost:8000/api/categories/${categoryId}`);
                            const categoryData = await categoryResponse.json();
                            setCategory(categoryData.data);
                        } else {
                            console.error('Category ID is undefined in post data:', data.data);
                        }
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

    return (
        <>
            <div className="blogdetail_head">
                <p className="blogdetail_date">{post && new Date(post.createdDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                <p className="blogdetail_headtext">{post?.category || 'Category Not Found'}  -  By AnilKesariya  -  0 Comments</p>
                {post && <img className="blogdetail_img" src={`data:image/png;base64,${post.image}`} alt={post.title} />}
                <p className="blogdetail_innercontent">{post?.innerContent}</p>
            </div>
            <BlogResponse />
        </>
    );

}

export default BlogDetail;
