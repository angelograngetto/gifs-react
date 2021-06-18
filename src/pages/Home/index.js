import React, {useState, useEffect} from 'react'
import {Link, useLocation} from 'wouter'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import TrendingSearches from 'components/TrendingSearches'


export default function Home(){
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGifs()


    const handleSubmit = (event) => {
        event.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = (event) => {
        setKeyword(event.target.value)
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder="Search a gif here..." onChange={handleChange} type="text" value={keyword}/>
            </form>
            <div className="Home">
                <div>
                    <h3>Última búsqueda</h3>
                    <ListOfGifs gifs={gifs}></ListOfGifs>
                </div>
                <div>
                    <h3 className="App-title">Los gifs más populares</h3>
                    <TrendingSearches/>
                </div>
            </div>
            
            
        </>
    )
}