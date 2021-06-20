import React, {useState, useReducer} from 'react'
import {useLocation} from 'wouter'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm({initialKeyword = '', initialRating = 'g'}){

    const [path, pushLocation] = useLocation()
    const [keyword, setKeyword] = useState(decodeURI(initialKeyword))
    const [rating, setRating] = useState(initialRating)
 

    const handleSubmit = (event) => {
        event.preventDefault()
        pushLocation(`/search/${keyword}/${rating}`)
    }

    const handleChange = (event) => {
        setKeyword(event.target.value)
    }

    const handleChangeRating = (event) =>{
        setRating(event.target.value)
    }

    return(
        <form className="search"onSubmit={handleSubmit}>
            <input className="search__input" placeholder="Search a gif here..." onChange={handleChange} type="text" value={keyword}/>

            
            {/* 
                Ratings options.
            <select className="select__rating" value={rating} onChange={handleChangeRating}>
                <option disabled>Rating type</option>
                {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
            </select> */}
        </form>
    )
}

export default React.memo(SearchForm)