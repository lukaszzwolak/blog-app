import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import PostForm from './PostForm';
import { v4 as uuidv4 } from 'uuid';

const AddPostForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = post => {
        dispatch(addPost({ ...post, id: uuidv4() }));
        navigate('/');
    };

    return (
        <PostForm action={handleSubmit} actionText="Add post" />
    );
};

export default AddPostForm;
