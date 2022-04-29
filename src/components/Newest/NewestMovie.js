import React,{useState,useEffect} from 'react'
import { getNewestMovies } from '../../Api/Movies'
import { MoreMovies } from '../MoreMovies/MoreMovies'
import MovieCard from '../MovieCard/MovieCard'

const NewestMovies = () => {
    const [newestMovies,setNewestMovies] = useState([])
    const [itemsVisible,setTotalItems] = useState(3)
   

    const fetchNewestMovies=()=>{
        getNewestMovies().then((res)=>{
            console.log(res)
            if(!res) return;
            setNewestMovies(res.results)
        })
    }
    useEffect(()=>{
        fetchNewestMovies()
     },[])
  return (
    <>
    
         {
            newestMovies.slice(0,itemsVisible).map((item,index)=>(
                 <MovieCard
                 movie={item}
                 key={item.id + index+''}
                 />
             ))}
     <MoreMovies setTotalItems={setTotalItems}/>
  </>
  )
}
export default NewestMovies