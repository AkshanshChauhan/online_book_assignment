import { connect } from "react-redux"
import { atoz, def} from "../../redux/action";
import BookList from "../bookList/booklist";

function Filters({ filter, atoz, def}) {
    return (
        <div className="filter">
            <div className="filter-sorting">
                <button className="sorting-button" onClick={filter ? def : atoz}>{!filter ? "Sort A-Z":"Normal"}</button>
                <button className="book-list-button">Book List</button>
            </div>
            <BookList />
        </div>
    )
}

const mapStateToProps = (state) => ({
    filter: state.filters.filter,
});

export default connect(mapStateToProps, {atoz, def})(Filters);