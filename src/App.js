import React,{useState}from 'react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import DisplayMovies from './components/DisplayMovies/DisplayMovies';
import { SearchBox } from './components/SearchBox/SearchBox';
import {FaSistrix} from 'react-icons/fa'
import styles from '../src/components/Navbar/Navbar.module.css'

function App() {
  const [movieName,setMovieName] = useState(' ')

  const handleChange = (e)=>{
    const data =  e.target.value
    setMovieName(data)
    }
    
 
  return (
      <>
      <div className={styles.container}>
        <div className={styles.inputBox}>
            <FaSistrix style={{fontSize:20}}/>
            <input type='text' 
            value={movieName}
            onChange={handleChange}
            placeholder='Sök eller ange namn på webbplats'/>
        </div>
       
    </div>
      <div>
        <Header/>
      </div>
      <div>
      {movieName ===' '?<DisplayMovies/>:<SearchBox movieName={movieName} />}
      </div>
      <div>
        <Footer/>
      </div>
      </>
  );
}

export default App;
