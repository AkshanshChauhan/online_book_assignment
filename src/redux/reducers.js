import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import searchReducer from "./searchReducer";
import listReducer from "./listReducer";

const rootReducer = combineReducers({
    filters: filterReducer,
    searches: searchReducer,
    booklists: listReducer,
});

export default rootReducer;