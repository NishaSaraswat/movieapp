import React ,{useEffect,useState} from 'react'
import { getPopularMovies } from '../../Api/Movies'
import MovieCard from '../MovieCard/MovieCard'
import { MoreMovies } from '../MoreMovies/MoreMovies'

 const TrendingMovies = () => {

     const [trendingMovies,setTrendingMovies] = useState([])
     const [itemsVisible,setTotalItems] = useState(3)
    
     const fetchTrendingMovies = () =>{
        getPopularMovies().then((res)=>{
            if(!res) return;
                setTrendingMovies(res.results)
     })
    }

     useEffect(()=>{
        fetchTrendingMovies()
     },[])

  return (
      <>
      
            {
                trendingMovies.slice(0,itemsVisible).map((item,index)=>(
                    <MovieCard
                    movie={item}
                    key={item.id + index+''}
                    />
                ))}
        <MoreMovies setTotalItems={setTotalItems}/>
     </>
  )
}
export default TrendingMovies