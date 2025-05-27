// ACTION TYPES
const createActionName = actionName => `app/posts/${actionName}`;
const DELETE_POST = createActionName('DELETE_POST');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');

// ACTION CREATORS
export const deletePost = id => ({ type: DELETE_POST, payload: id, });
export const addPost = post => ({ type: ADD_POST, payload: post });
export const editPost = post => ({ type: EDIT_POST, payload: post });

// SELECTORS
export const getAllPosts = state => state.posts;
export const getPostById = (state, postId) => state.posts.find(post => post.id === postId);

// REDUCER
const postsReducer = (statePart = [], action) => {
    switch (action.type) {
        case ADD_POST:
            return [...statePart, action.payload];
        case DELETE_POST:
            return statePart.filter(post => post.id !== action.payload);
        case EDIT_POST:
            return statePart.map(post =>
                post.id === action.payload.id ? { ...post, ...action.payload } : post);
        default:
            return statePart;
    }
};

export default postsReducer;
