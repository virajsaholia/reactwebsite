import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Link, useSearchParams, useNavigate, useParams } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate(); // Add this line to get the navigate function
    const selectedCategory = searchParams.get('category');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/categories');
                const data = await response.json();
                setCategories(data.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []); // Empty dependency array ensures the effect runs only once

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                let url = 'http://localhost:8000/api/posts';

                if (searchParams.has('category')) {
                    // If a specific category is selected, add it to the URL
                    const selectedCategory = searchParams.get('category');
                    const encodedCategory = encodeURIComponent(selectedCategory);
                    url += `?category=${encodedCategory}`;
                }
                const response = await fetch(url);
                const data = await response.json();
                setPosts(data.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, [searchParams]);

    return (
        <section>
            <Container className='blogs_home'>
                <Row>
                    <Col lg={9}>
                        <Row className="blog_card_style">
                            {posts.map((post) => (
                                <Col lg={6} key={post._id}>
                                    <div className="blog_card">
                                        <img className="location_contact" src={`data:image/png;base64,${post.image}`} alt={post.title} />
                                        <p className="blog_date">{new Date(post.createdDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                                        <p className="blog_title">{post.title}</p>
                                        <p className="blog_headtext">{post.content}</p>
                                        <Link to={`BlogDetail/${post._id}`}>
                                            <button className="blog_readmore">Read More</button>
                                        </Link>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col lg={3}>
                        <form action="">
                            <input type="text" placeholder="Search.." name="search" />
                            <button type="submit" className='search_button'><i className="fa fa-search"></i></button>
                        </form>
                        <p className='blog_search_heading'>Beyond Services: Cultivating Knowledge</p>
                        <p className='blog_search_headtext'>In the digital era, information is key, and at Jupical, we believe in sharing that key freely. We are not just service providers; we are educators. Our commitment to empowering businesses goes hand-in-hand with our dedication to fostering knowledge.</p>
                        <p className='blog_search_headtext'>That's why we bring you insightful blogs that delve into the intricacies of ERP, business trends, and technology advancements.</p>
                        <h3>Categories</h3>
                        <Link to='/Blog' className='side_nav'>
                            <p className='nav_item1'>All</p>
                        </Link>
                        {categories.map(category => (
                            <Link key={category._id} to={`/Blog?category=${encodeURIComponent(category.categorytype)}`} style={{ textDecoration: 'none' }} className='side_nav'>
                                <p className='nav_item1'>{category.categorytype}</p>
                            </Link>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Blog;
