import React from 'react'
import HeroBanner from './heroBanner/HeroBanner'
import './style.scss'
import Trending from './Trending/Trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'
function Home() {
  return (
    <div className='homePage'>
        <HeroBanner />
        <Trending />
        <Popular />
        <TopRated />
        
    </div>
  )
}

export default Home