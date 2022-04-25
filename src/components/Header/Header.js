import React from 'react'
import styles from '../Header/Header.module.css'
import {FaSistrix,FaBars} from 'react-icons/fa'


 const Header = () => {
  return (
      <div className={styles.container}>
        <div className={styles.pageTitle}>Movies</div>

        <div className={styles.right}>
            <div className={styles.search}>
            <FaSistrix style={{fontSize:25}}/>
            </div>
        </div>
        <div><FaBars  style={{fontSize:25}}/></div>
    </div>
  )
}
export default Header
