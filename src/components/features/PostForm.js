import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';

const PostForm = ({ action, actionText, ...props }) => {
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || new Date());
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    const {
        register,
        handleSubmit: validate,
        formState: { errors },
    } = useForm();

    const handleSubmit = () => {
        action({ title, author, publishedDate, shortDescription, content });
    };

    return (
        <Form onSubmit={validate(handleSubmit)}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    {...register('title', { required: true })}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                {errors.title && (
                    <small className="d-block form-text text-danger mt-2">
                        Title is required
                    </small>
                )}
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Author</Form.Label>
                <Form.Control
                    {...register('author', { required: true, minLength: 3 })}
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                {errors.author && (
                    <small className="d-block form-text text-danger mt-2">
                        Author must be at least 3 characters
                    </small>
                )}
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Published</Form.Label>
                <DatePicker
                    selected={publishedDate}
                    onChange={(date) => setPublishedDate(date)}
                    dateFormat="MM/dd/yyyy"
                    className="form-control"
                    required
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Short description</Form.Label>
                <Form.Control
                    {...register('shortDescription', { required: true })}
                    value={shortDescription}
                    onChange={(e) => setShortDescription(e.target.value)}
                />
                {errors.shortDescription && (
                    <small className="d-block form-text text-danger mt-2">
                        Short description is required
                    </small>
                )}
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Main content</Form.Label>
                <ReactQuill
                    theme="snow"
                    value={content}
                    onChange={setContent}
                    className="w-100"
                />
                {!content && (
                    <small className="d-block form-text text-danger mt-2">
                        Content is required
                    </small>
                )}
            </Form.Group>

            <Button variant="primary" type="submit">
                {actionText}
            </Button>
        </Form>
    );
};

PostForm.propTypes = {
    action: PropTypes.func.isRequired,
    actionText: PropTypes.string.isRequired,
};

export default PostForm;
