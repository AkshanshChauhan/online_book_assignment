import { useEffect, useState } from "react"
import { addBookList } from "../../../redux/action";
import { connect } from "react-redux";
function ResultBook(info,{addBookList, book_list}) {
    const [buttonBookList, setButtonBookList] = useState(false);
    return (
        <div className="result-book">
            <h1 className="ellipsis">{info.te}</h1>
            <h3 className="ellipsis"><b>Author: </b><i>{info.ar}</i></h3>
            <div className="book-info ellipsis">
                <p className="ellipsis"><b>Id: </b>{info.id}</p>
                <p className="ellipsis"><b>Language: </b>{info.lg}</p>
                <p className="ellipsis"><b>Year: </b>{info.yr}</p>
                <p className="ellipsis"><b>Country: </b>{info.cy}</p>
                <p className="ellipsis"><b>Pages: </b>{info.pg}</p>
                <p className="ellipsis"><b>Link: </b>{info.lk}</p>
            </div>
            <br></br>
            <button className={buttonBookList ? "book-get-button-added" : "book-get-button"} onClick={()=>{!buttonBookList ? setButtonBookList(true) : setButtonBookList(false)}}>{!buttonBookList ? "Add to Book List" : "Book is Added"}</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    book_list: state.booklists.book_list,
});

export default connect(mapStateToProps, {addBookList})(ResultBook);