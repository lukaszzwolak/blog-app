import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PostForm = ({ action, actionText, ...props }) => {
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control value={title} onChange={e => setTitle(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Short Description</Form.Label>
                <Form.Control value={shortDescription} onChange={e => setShortDescription(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <ReactQuill theme="snow" value={content} onChange={setContent} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Author</Form.Label>
                <Form.Control value={author} onChange={e => setAuthor(e.target.value)} required />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Published Date</Form.Label>
                <Form.Control type="date" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} required />
            </Form.Group>

            <Button variant="primary" type="submit">{actionText}</Button>
        </Form>
    );
};

PostForm.propTypes = {
    action: PropTypes.func.isRequired,
    actionText: PropTypes.string.isRequired,
};

export default PostForm;
