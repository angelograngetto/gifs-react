import React, {useCallback, useEffect, useRef} from 'react'
import ListOfGifs from 'components/ListOfGifs'
import {useGifs} from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import {Helmet} from 'react-helmet'
import SearchForm from 'components/SearchForm'
import Loader from 'components/Loader'

export default function SearchResults({params}){

    const {keyword, rating = 'g'} = params
    const {loading, gifs, setPage} = useGifs({keyword, rating})
    const externalRef = useRef()
    const {isNearScreen} = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false
      })
    const title = gifs ? `${gifs.length} results of ${keyword}` : ''

    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
      ), [setPage])

    useEffect(function(){
        console.log(isNearScreen)
        if(isNearScreen) debounceHandleNextPage()
    },[debounceHandleNextPage, isNearScreen])

    return <>
            {
                loading
                ? <Loader/>
                : <> 
                    <Helmet>
                      <title>{decodeURI(title)} | RIFS</title>
                      <meta name="description" content={title}/>
                    </Helmet>
                    <SearchForm initialKeyword={keyword} initialRating={rating}/>
                    <h3>Results of {(decodeURI(keyword)).toUpperCase()}</h3>
                    <ListOfGifs gifs={gifs} />
                    <div id="visor" ref={externalRef}></div>
                  </>
            }
        </>
}