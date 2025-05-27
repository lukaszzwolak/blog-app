import { useSelector } from 'react-redux';
import { getAllPosts } from '../../redux/postsRedux';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';

const Home = () => {
    const posts = useSelector(getAllPosts);

    return (
        <div>
            <h1>All Posts</h1>
            <Row>
                {posts.map(post => (
                    <Col key={post.id} xs={12} md={6} lg={4} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    By {post.author} | {post.publishedDate}
                                </Card.Subtitle>
                                <Card.Text>{post.shortDescription}</Card.Text>
                                <Link to={`/post/${post.id}`}>
                                    <Button variant="primary">Read more</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Home;
