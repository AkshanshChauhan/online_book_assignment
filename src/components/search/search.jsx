import { connect } from "react-redux"
import { setValue, searchButton } from "../../redux/action"

function Search({setValue, searchButton, search_val, search_button}) {
    return (
        <div className="search">
            <input type="text" className="search-input" onChange={(e)=>setValue(e.currentTarget.value.toLowerCase())} placeholder="Enter Title..." />
            <button className="search-button" onClick={()=>searchButton(1 + search_button)}></button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    search_val: state.searches.search_val,
    search_button: state.searches.search_button,
});

export default connect(mapStateToProps, {setValue, searchButton})(Search);