import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../redux/categoriesRedux';

const PostForm = ({ action, actionText, ...props }) => {
    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || null);
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [category, setCategory] = useState(props.category || '');

    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);

    const categories = useSelector(getAllCategories);

    const {
        register,
        handleSubmit: validate,
        formState: { errors },
    } = useForm();

    const handleSubmit = () => {
        setContentError(!content);
        setDateError(!publishedDate);

        if (content && publishedDate) {
            action({ title, author, publishedDate, shortDescription, content, category });
        }
    };

    return (
        <Form onSubmit={validate(handleSubmit)}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    {...register('title', { required: true, minLength: 3 })}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                {errors.title && (
                    <small className="d-block form-text text-danger mt-2">
                        Title must be at least 3 characters
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
                />
                {dateError && (
                    <small className="d-block form-text text-danger mt-2">
                        Published date is required
                    </small>
                )}
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select value={category} onChange={(e) => setCategory(e.target.value)} required>
                    <option value="">-- Select a category --</option>
                    {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Short description</Form.Label>
                <Form.Control
                    {...register('shortDescription', { required: true, minLength: 20 })}
                    value={shortDescription}
                    onChange={(e) => setShortDescription(e.target.value)}
                />
                {errors.shortDescription && (
                    <small className="d-block form-text text-danger mt-2">
                        Short description must be at least 20 characters
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
                {contentError && (
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
