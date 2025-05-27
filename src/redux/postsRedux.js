
// actions
const createActionName = actionName => `app/posts/${actionName}`;

// reducer
const postsReducer = (statePart = [], action) => {
    switch (action.type) {
        default:
            return statePart;
    }
};

export default postsReducer;
