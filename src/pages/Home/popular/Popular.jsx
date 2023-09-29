import React, { useEffect, useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'

const Popular = () => {
    const [endPoint,setEndPoint]=useState("movie")
    const {data,loading}=useFetch(`/${endPoint}/popular`)
    const onTabChange=(tab)=>{
      setEndPoint(tab==="Movie" ?"movie":"tv")
    }
    useEffect
  return (
    <div className='carouselSection'>
    <ContentWrapper>
        <span className='carouselTitle'>Whats Popular</span>
        <SwitchTabs data={["Movie","Tv Shows"]} onTabChange={onTabChange}/>
    </ContentWrapper>
    <Carousel data={data?.results} loading={loading} endpoint={endPoint}/>
    </div>
  )
}

export default Popular