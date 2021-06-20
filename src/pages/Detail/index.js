import React from 'react'
import {Redirect} from 'wouter'
import Gif from 'components/Gif/index'
import useSingleGif from 'hooks/useSingleGif'
import {Helmet} from 'react-helmet'

export default function Detail ({params}){
    const {gif, isLoading, isError} = useSingleGif({id: params.id})
    const title = gif ? gif.title : ''
  
    if(isLoading){
        return (
                <>
                    <Helmet>
                        <title>Loading...</title>
                    </Helmet>
                    <h2>Loading...</h2>
                </>
                ) 
    } 

    if(isError) return <Redirect to='/404'/>
    if(!gif) return null

    return (
        <>
            <Helmet>
                <title>{title} | RIFS</title>
                <meta name="description" content={'Showing gif: ' + title}/>
            </Helmet>
            <Gif {...gif}/>
        </>
        )
}