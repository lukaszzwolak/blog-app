import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../redux/postsRedux';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { dateToStr } from '../../utils/dateToStr';

const CategoryPosts = () => {
    const { name } = useParams();
    const posts = useSelector(getAllPosts).filter(
        p => p.category && p.category.toLowerCase() === name.toLowerCase()
    );
    return (
        <>
            <h1>Posts in category: {name}</h1>
            {posts.length === 0 ? (
                <p>No posts in this category...</p>
            ) : (
                posts.map(post => (
                    <Card key={post.id} className="mb-3">
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                Author: {post.author} | Published: {dateToStr(post.publishedDate)} | Category: {post.category}
                            </Card.Subtitle>
                            <Card.Text>{post.shortDescription}</Card.Text>
                            <Link to={`/post/${post.id}`}>
                                <Button variant="primary">Read more</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                ))
            )}
        </>
    );
};

export default CategoryPosts;
