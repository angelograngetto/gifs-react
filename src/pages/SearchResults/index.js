import React, {useCallback, useEffect, useRef} from 'react'
import ListOfGifs from 'components/ListOfGifs'
import {useGifs} from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import {Helmet} from 'react-helmet'


export default function SearchResults({params}){

    const {keyword} = params
    const {loading, gifs, setPage} = useGifs({keyword})
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
                ? <h2>Loading</h2>
                : <> 
                    <Helmet>
                      <title>{title} | RIFS</title>
                      <meta name="description" content={title}/>
                    </Helmet>
                    <h3>{decodeURI(keyword)}</h3>
                    <ListOfGifs gifs={gifs} />
                    <div id="visor" ref={externalRef}></div>
                  </>
            }
        </>
}