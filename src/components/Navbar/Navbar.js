import React from 'react'
import {FaSistrix} from 'react-icons/fa'
import styles from '../Navbar/Navbar.module.css'

 const Navbar=()=>{
  return (
    <div className={styles.container}>
        <div className={styles.inputBox}>
            <FaSistrix style={{fontSize:20}}/>
            <input type='text' placeholder='Sök eller ange namn på webbplats'/>
        </div>
    </div>
  )
}
export default Navbar