import React, {Suspense} from 'react'
import useNearScreen from 'hooks/useNearScreen'
import Loader from 'components/Loader'


const TrendingSearches = React.lazy(
    () => import('./TrendingSearches')
)

export default function LazyTrending(){
    const {isNearScreen, fromRef} = useNearScreen({distance: '200px'})
    return <div ref={fromRef}>
        <Suspense fallback={<Loader/>}>
        {isNearScreen ? <TrendingSearches/> : null}
        </Suspense>
    </div>
}