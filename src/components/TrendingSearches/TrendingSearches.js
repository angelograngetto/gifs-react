import React, {useEffect, useState} from 'react'
import {Link} from 'wouter'
import getTrendingTerms from 'services/getTrendingTermsService'

export default function TrendingSearches(){
    const [trends, setTrends] = useState([])

    useEffect(function(){
        getTrendingTerms().then(setTrends)
    },[])

    return <div className="Trending">
            {trends.map(trend => <Link to={`/search/${trend}`} key={trend}>{trend}</Link>)}
          </div>
}