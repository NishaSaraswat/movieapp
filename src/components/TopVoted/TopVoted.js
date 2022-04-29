import React,{useState,useEffect} from 'react'
import { getTopVottedMovies } from '../../Api/Movies'
import MovieCard from '../MovieCard/MovieCard'
import { MoreMovies } from '../MoreMovies/MoreMovies'

const TopVoted = () => {

    const [topVottedMovies,setTopVottedMovies] = useState([])
    const [itemsVisible,setTotalItems] = useState(3)
   

    const fetchTopVotedMovies=()=>{
        getTopVottedMovies().then((res)=>{
            if(!res) return;
            setTopVottedMovies(res.results)
        })
    }
    useEffect(()=>{
        fetchTopVotedMovies()
     },[])


  return (
    <>
   
         {
             topVottedMovies.slice(0,itemsVisible).map((item,index)=>(
                 <MovieCard
                 movie={item}
                 key={item.id + index+''}
                 />
             ))}
        <MoreMovies  setTotalItems={setTotalItems}/>
  </>
  )
}
export default TopVoted