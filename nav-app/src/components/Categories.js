import { useEffect, useState } from 'react';
import { Button, Card, CardContent, CardMedia, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import { Row, Col } from 'react-grid-system';
import { styled } from '@mui/system';

const StyledTable = styled(Table)`
    border: 1px solid rgba(224, 224, 224, 1);
`;

const StyledButton = styled(Button)`
    margin: 20px;
    width: 85%;
    background: #6495ED;
    color: #fff;
    text-decoration: none;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const StyledCardContainer = styled('div')`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const StyledCard = styled(Card)`
    flex-basis: calc(33.33% - 20px);
    margin: 10px;
    max-width: 400px;
`;

const StyledCardMedia = styled(CardMedia)`
    height: 140px;
`;

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);
    const [searchParams] = useSearchParams();
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
    }, []);

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
        <>
            <Row>
                <Col lg={2}>
                    <Link to={`/Createpost?category=${selectedCategory || ''}`} style={{ textDecoration: 'none' }}>
                        <StyledButton variant="contained">Create Blog</StyledButton>
                    </Link>

                    <StyledTable>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <StyledLink to="/Categories">
                                        All Categories
                                    </StyledLink>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {categories.map((categoryItem) => (
                                <TableRow key={categoryItem._id}>
                                    <TableCell>
                                        <StyledLink to={`/Categories?category=${encodeURIComponent(categoryItem.categorytype)}`}>
                                            {categoryItem.categorytype}
                                        </StyledLink>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </StyledTable>
                </Col>
                <Col lg={10}>
                    {/* Display the fetched posts in this column using Card component */}
                    <StyledCardContainer>
                        {posts.map((post) => (
                            <StyledCard key={post._id}>
                                <StyledCardMedia
                                    component="img"
                                    height="140"
                                    image={`data:image/png;base64,${post.image}`}
                                    alt="Post"
                                />
                                <CardContent>
                                    <h3>{post.title}</h3>
                                    <p>{post.content}</p>
                                    {/* Add other post details as needed */}
                                    <Link to={`DetailViews/${post._id}`}>
                                        <Button variant="contained" color="primary">
                                            Read More
                                        </Button>
                                    </Link>
                                </CardContent>
                            </StyledCard>
                        ))}
                    </StyledCardContainer>
                </Col>
            </Row>
        </>
    );
};

export default Categories;
