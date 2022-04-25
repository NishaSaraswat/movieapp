import React from 'react'
import styles from '../Footer/Footer.module.css'

 const Footer= () =>{
  return (
      <>
        <div className={styles.container}>
            <div className={styles.tmdbContainer}>
                TMDB
            </div>
            <div className={styles.logoContainer}>
            </div>
            <div className={styles.info}>
            This product uses the TMDb API but is not endorsed or certified by TMDb
            </div>
        </div>
    </>
  )
}
export default Footer