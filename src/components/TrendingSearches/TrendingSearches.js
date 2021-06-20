import React, {useEffect, useState} from 'react'
import {Link} from 'wouter'
import getTrendingTerms from 'services/getTrendingTermsService'

export default function TrendingSearches(){
    const [trends, setTrends] = useState([])

    useEffect(function(){
        getTrendingTerms().then(setTrends)
    },[])

    return <div className="trending">
            <h3>Trending searches</h3>
            <div className="trending__list">
                {trends.map(trend => <Link to={`/search/${trend}`} key={trend}>{trend}</Link>)}
            </div>
          </div>
}