import React from 'react'
import {
    Title,
    MainContainer,
    InnerContainer
} from '../movieStyled'
import NewestMovies from '../Newest/NewestMovie'
import TopVoted from '../TopVoted/TopVoted'
import TrendingMovies from '../TrendingMovies/TrendingMovies'

const DisplayMovies = () => {
    
  return (
    <>
   <MainContainer>
    <Title>Trending</Title> 
        <InnerContainer>
            <TrendingMovies/>
        </InnerContainer>
     </MainContainer>

     <MainContainer>
        <Title>Newest</Title> 
            <InnerContainer>
                <NewestMovies/>
            </InnerContainer>
     </MainContainer>

     <MainContainer>
     <Title>Top Voted</Title> 
        <InnerContainer>
            <TopVoted/>
        </InnerContainer>
     </MainContainer>
  </>
  )
}
export default  DisplayMovies