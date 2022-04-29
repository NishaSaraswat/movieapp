import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import DisplayMovies from './components/DisplayMovies/DisplayMovies';

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
        <DisplayMovies/>
      </div>
      <div>
        <Footer/>
      </div>
      </>
  );
}

export default App;
