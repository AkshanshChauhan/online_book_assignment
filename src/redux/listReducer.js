const initialState = {
    book_list: null,
};

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return {...state, book_list: action.value };
        default:
            return state;
    }
};

export default listReducer;