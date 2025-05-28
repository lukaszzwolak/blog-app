import { useParams, Navigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPostById, deletePost } from '../../redux/postsRedux';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { dateToStr } from '../../utils/dateToStr';

const Post = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const post = useSelector(state => getPostById(state, id));

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleDelete = () => {
        dispatch(deletePost(id));
        setShowModal(false);
    };

    if (!post) {
        return <Navigate to="/" />;
    }

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>{post.title}</h1>
                <div>
                    <Link to={`/post/edit/${post.id}`}>
                        <Button variant="outline-info" className="me-2">Edit</Button>
                    </Link>
                    <Button variant="outline-danger" onClick={handleShowModal}>Delete</Button>
                </div>
            </div>

            <p className="text-muted">
                <strong>Author:</strong> {post.author} | <strong>Published:</strong> {dateToStr(post.publishedDate)}

            </p>

            <div dangerouslySetInnerHTML={{ __html: post.content }} />

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>This action will permanently delete the post.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Cancel</Button>
                    <Button variant="danger" onClick={handleDelete}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Post;
