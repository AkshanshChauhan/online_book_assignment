const initialState = {
    search_val: null,
    search_button: null,
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH_VALUE":
            return {...state, search_val: action.value };
        case "SEARCH_BUTTON":
            return {...state, search_button: action.value };
        default:
            return state;
    }
};

export default searchReducer;