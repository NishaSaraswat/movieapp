import React from 'react'
import styles from '../MovieCard/MovieCard.module.css'

const preImagePath = 'https://image.tmdb.org/t/p/w500';

 const MovieCard = (props) => {
   const movie = props?.movie;
   
  return (
    <div className={styles.cardContainer}>
      <img src={`${preImagePath}${movie?.poster_path}`} alt={movie?.title}/>
    </div>
  )
}
export default MovieCard