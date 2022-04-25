import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TrendingMovies from './components/TrendingMovies/TrendingMovies';

function App() {
  return (
      <>
      <div>
        <Navbar/>
      </div>
      <div>
        <Header/>
      </div>
      <div>
        <TrendingMovies/>
      </div>
      <div>
        <Footer/>
      </div>
      </>
  );
}

export default App;
