import { useEffect, useState } from "react"
import axios from "axios";
import ResultBook from "./result-components/resultBook"
import { connect } from "react-redux";
import { setValue } from "../../redux/action";

function Result({filter, search_val, searchValue, search_button}) {
    const [allBookData, setAllBookData] = useState([]);
    const [allData, setAllData] = useState([]);

    function filterBooks() {
        search_val !== null ? setAllData(allBookData.filter(e=>e.title.toLowerCase().includes(search_val))) : setAllData(allBookData);
    };

    function sortBooks() {
        filter ? setAllData([...allBookData].sort((a, b)=> a.title.localeCompare(b.title))) : setAllData(allBookData); 
    };

    function getData() {
        axios.get("http://68.178.162.203:8080/application-test-v1.1/books")
            .then((data)=>{
                setAllBookData(data.data.data);
                setAllData(data.data.data);
            })
            .catch(err=>console.log(err));
    };

    useEffect(()=>{
        getData();
    }, []);

    useEffect(()=>{
        filterBooks();
    }, [search_val]);

    useEffect(()=>{
        sortBooks();
    }, [filter]);

    return (
        <div className="result">
            {
                allData.map((e, i)=>{
                    return <ResultBook key={i}
                        ar={e.author} 
                        cy={e.country}
                        lg={e.language}
                        lk={e.link}
                        pg={e.pages}
                        te={e.title}
                        yr={e.year}
                        id={e.id}
                    />
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => ({
    filter: state.filters.filter,
    search_val: state.searches.search_val,
    search_button: state.searches.search_button,
});

export default connect(mapStateToProps, setValue)(Result);