import React, {useState} from 'react'

function SearchForm({onSubmit}){
    const [keyword, setKeyword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({keyword})
    }

    const handleChange = (event) => {
        setKeyword(event.target.value)
    }

    return(
        <form className="search"onSubmit={handleSubmit}>
            <input className="search__input" placeholder="Search a gif here..." onChange={handleChange} type="text" value={keyword}/>
        </form>
    )
}

export default React.memo(SearchForm)