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
        <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap',gap:20,justifyContent:'center',marginBottom:10}}>
            {
            searchMovie.length === 0?
            <div style={{height:'74vh'}}>
                <p style={{marginTop:200,fontSize:'24px'}}>
                    No such movie found!    </p>
                    <img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/313/film-projector_1f4fd-fe0f.png' alt='movie'/>
            </div>:
            props.movieName ===' '?<DisplayMovies/>:
                searchMovie.map((item,index)=>(
                    <div style={{height:'74vh'}}>
                    <MovieCard
                    movie= {item}
                    key={item.id+index+''}
                    />
                    <div style={{paddingTop:15,paddingBottom:5,textAlign:'center',backgroundColor:'ActiveBorder',color:'black',borderRadius:10}}>
                        IMDB 
                        {' '+item.vote_average} 
                        </div>           
                </div>
                ))
            }
    </div>
    </>
  )
}
