import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const AddPostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedDate, setPublishedDate] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        const newPost = {
            id: uuidv4(),
            title,
            shortDescription,
            content,
            author,
            publishedDate,
        };

        dispatch(addPost(newPost));
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label><br />
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
                className="form-control mb-3"
            />

            <label>Short Description</label><br />
            <input
                value={shortDescription}
                onChange={e => setShortDescription(e.target.value)}
                required
                className="form-control mb-3"
            />

            <label>Content</label><br />
            <textarea
                value={content}
                onChange={e => setContent(e.target.value)}
                required
                rows="5"
                className="form-control mb-3"
            ></textarea>

            <label>Author</label><br />
            <input
                value={author}
                onChange={e => setAuthor(e.target.value)}
                required
                className="form-control mb-3"
            />

            <label>Published Date</label><br />
            <input
                type="date"
                value={publishedDate}
                onChange={e => setPublishedDate(e.target.value)}
                required
                className="form-control mb-3"
            />

            <button type="submit" className="btn btn-primary">Add Post</button>
        </form>
    );
};

export default AddPostForm;
