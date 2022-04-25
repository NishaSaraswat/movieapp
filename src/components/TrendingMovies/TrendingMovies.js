import React ,{useEffect,useState} from 'react'
import { getPopularMovies } from '../../Api/Movies'
import MovieCard from '../MovieCard/MovieCard'
import styles from '../TrendingMovies/TrendingStyle.module.css'
import {FaAngleDown,FaAngleUp} from 'react-icons/fa'

 const TrendingMovies = () => {

     const [trendingMovies,setTrendingMovies] = useState([])
     const [isDataLoaded,setDataLoaded] = useState(false)
     const [itemsVisible,setTotalItems] = useState(3)
     const [arrowDown,setarrowUpp] = useState()

     const fetchTrendingMovies = () =>{
         getPopularMovies().then((res)=>{
            if(!res)return;
            console.log(res)
            setTrendingMovies(res.results)
         })
     }
     useEffect(()=>{
        fetchTrendingMovies()
     },[])

     const showMoreMovies =()=>{
         
        setTotalItems(previousValue => previousValue+6)

     }
  return (
      <>
       <div className={styles.container}>
        <div className={styles.title}>Trending</div>
        <div className={styles.innerContainer}>
            {trendingMovies.slice(0,itemsVisible).map((item)=>(
                <MovieCard
                movie={item}
                key={item.id}
                />
            ))}
        </div>
        <FaAngleDown style={{marginLeft:175,marginTop:12,fontSize:30}}
            onClick={showMoreMovies}
        />
        </div>
     </>
  )
}
export default TrendingMovies