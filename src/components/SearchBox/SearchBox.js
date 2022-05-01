import React,{useState,useEffect} from 'react'
import MovieCard from '../MovieCard/MovieCard';
import DisplayMovies from '../DisplayMovies/DisplayMovies';


export const SearchBox = (props) => {
    const apiKey = '489a290aa19e07d8d696b5b084550f51';
    const apiDomain = 'https://api.themoviedb.org/3';
  

    const [searchMovie,setSearchMovies] = useState([])
  
    const fetchSearchedMovies = async()=>{
        const response = await fetch(`${apiDomain}/search/movie?api_key=${apiKey}&query=${props.movieName}`)
        const resJson = await response.json()
    
        setSearchMovies(resJson.results)
        }
   useEffect(() => {
  
    fetchSearchedMovies()
     
   }, [props.movieName])

  return (
    <>
        <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap',gap:19,justifyContent:'center',marginBottom:20}}>
            {props.movieName ===' '?<DisplayMovies/>:
                searchMovie.map((item)=>(
                    <MovieCard
                    movie= {item}
                    title={item.title}
                    key={item.id}
                    />
                ))
            }
    </div>
    </>
  )
}
