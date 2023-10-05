export const atoz = () => ({
    type: "ATOZ",
});

export const def = () => ({
    type: "DEF",
});

export const setValue = (val) => ({
    type: 'SEARCH_VALUE',
    value: val,
});

export const searchButton = (val) => ({
    type: 'SEARCH_BUTTON',
    value: val,
});

export const addBookList = (book) => ({
    type: 'ADD_BOOK',
    value: book,
});