// Initial state
const initialState = ['Sport', 'News', 'Movies'];

// Selector
export const getAllCategories = state => state.categories;

// Reducer
const categoriesReducer = (statePart = initialState, action) => {
    return statePart;
};

export default categoriesReducer;
