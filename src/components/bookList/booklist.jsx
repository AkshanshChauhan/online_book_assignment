import { useEffect, useState } from "react"

export default function BookList() {
    const [bookListData, setBookListData] = useState([]);

    useEffect(()=>{
        localStorage.getItem("bookList") !== undefined ? setBookListData(localStorage.getItem("bookList")) : null;
    }, []);

    return (
        <div className="book-list">
            
        </div>
    )
}