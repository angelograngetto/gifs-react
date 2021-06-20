import React, {useCallback} from 'react'
import {useLocation} from 'wouter'
import ListOfGifs from 'components/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import TrendingSearches from 'components/TrendingSearches'
import SearchForm from 'components/SearchForm'
import {Helmet} from 'react-helmet'

export default function Home(){

    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGifs()

    console.log(path)
    console.log(loading)
    const handleSubmit = useCallback(({keyword}) => {
        pushLocation(`/search/${keyword}`)
    },[pushLocation])


    return(
        <>  
            <Helmet>
                <title>Home | RIFS</title>
                <meta name="description" content='A react gifs application'/>
            </Helmet>
            <SearchForm onSubmit={handleSubmit}/>
            <div className="Home">
                <div>
                    <h3>{localStorage.getItem('lastKeyword') ? 'Last search: '  + localStorage.getItem('lastKeyword') : 'Random gifs'}</h3> 
                    <ListOfGifs gifs={gifs}></ListOfGifs>
                </div>
                <div>
                    <TrendingSearches/>
                </div>
            </div>
        </>
    )
}