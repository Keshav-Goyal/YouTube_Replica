import React from 'react'
import './SearchPage.css'
import TunedOutLinedIcon from '@material-ui/icons/TuneOutlined'

function SearchPage() {
    return (
        <div className="searchPage">
           <div className="searchPage__filter">
                <TunedOutLinedIcon/>
                <h2>Filter</h2>
           </div>
        </div>
    )
}

export default SearchPage
