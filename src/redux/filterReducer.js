const initialState = {
    filter: false,
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ATOZ":
            return {...state, filter: true };
        case "DEF":
            return {...state, filter: false };
        default:
            return false;
    }
};

export default filterReducer;