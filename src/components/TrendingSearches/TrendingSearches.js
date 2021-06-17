import React, {useEffect, useState} from 'react'
import getTrendingTerms from 'services/getTrendingTermsService'

export default function TrendingSearches(){
    const [trends, setTrends] = useState([])

    useEffect(function(){
        getTrendingTerms().then(setTrends)
    },[])

    return <div>
            {trends.map(trend => <p key={trend}>{trend}</p>)}
          </div>
}