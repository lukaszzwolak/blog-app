// ACTION TYPES
const createActionName = actionName => `app/posts/${actionName}`;
const DELETE_POST = createActionName('DELETE_POST');

// ACTION CREATORS
export const deletePost = id => ({ type: DELETE_POST, payload: id, });

// SELECTORS
export const getAllPosts = state => state.posts;
export const getPostById = (state, postId) => state.posts.find(post => post.id === postId);

// REDUCER
const postsReducer = (statePart = [], action) => {
    switch (action.type) {
        case DELETE_POST:
            return statePart.filter(post => post.id !== action.payload);
        default:
            return statePart;
    }
};

export default postsReducer;
