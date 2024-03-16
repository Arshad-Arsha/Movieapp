import React, { createContext, useState } from 'react';
import './Style.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/home';
import Header from './Header/navebar';
import BannerMovies from './BannerMovies';
import Movies from './Movies'; // Assuming you have a component named Movies
import DetailView from './DetailView';
import { comedyMovies, latestMovies, popularMovies } from './Url';

const movieContext = createContext();

function App() {
  const [listmovies, setlistmovies] = useState([]);
  const [movie_id, setmovie_id] = useState([]);
  const currentpage = window.location.pathname;

  return (
    <div>
      <movieContext.Provider value={{ listmovies, setlistmovies, movie_id, setmovie_id }}>
        <BrowserRouter>
          {currentpage !== '/moviedetail' ? (
            <>
              <Header />
              <BannerMovies movies={latestMovies} />
            </>
          ) : null}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/latest' element={<Movies movielist={latestMovies} title="Latest Movies" />} />
            <Route path='/popular' element={<Movies movielist={popularMovies} title="Popular Movie" />} />
            <Route path='/comedy' element={<Movies movielist={comedyMovies} title="Comedy Movie" />} />
            <Route path='/moviedetail' element={<DetailView />} />
          </Routes>
        </BrowserRouter>
      </movieContext.Provider>
    </div>
  );
}

export default App;
export { movieContext };
