import { useSelector } from 'react-redux';
import { getAllPosts } from '../../redux/postsRedux';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { dateToStr } from '../../utils/dateToStr';

const Home = () => {
    const posts = useSelector(getAllPosts);

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="mb-0">All posts</h1>
                <Link to="/post/add">
                    <Button variant="outline-primary">Add post</Button>
                </Link>
            </div>

            <Row className="g-4">
                {posts.map(post => (
                    <Col key={post.id} xs={12} md={6} lg={4}>
                        <Card className="h-100">
                            <Card.Body>
                                <Card.Title className="fw-bold fs-5">{post.title}</Card.Title>
                                <Card.Text className="mb-2">
                                    <strong>Author:</strong> {post.author} <br />
                                    <strong>Published:</strong> {dateToStr(post.publishedDate)}
                                </Card.Text>
                                <Card.Text>{post.shortDescription}</Card.Text>
                                <Link to={`/post/${post.id}`}>
                                    <Button variant="primary">Read more</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default Home;
