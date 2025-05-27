import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostById, editPost } from '../../redux/postsRedux';
import PostForm from './PostForm';

const EditPostForm = () => {
    const { id } = useParams();
    const post = useSelector(state => getPostById(state, id));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if (!post) return <Navigate to="/" />;

    const handleSubmit = postData => {
        dispatch(editPost({ ...postData, id }));
        navigate('/');
    };

    return (
        <PostForm
            action={handleSubmit}
            actionText="Edit post"
            title={post.title}
            author={post.author}
            publishedDate={post.publishedDate}
            shortDescription={post.shortDescription}
            content={post.content}
        />
    );
};

export default EditPostForm;
