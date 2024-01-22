import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import Movieverse from "./movieverse";

const App = () => {
  const API_URL = "http://www.omdbapi.com/?apikey=7e41195";
  const [searchTerm, setSearchTerm] = useState();
  const [movies, setmovies] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setmovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="app">
      <h1>Movieverse</h1>
      <div className="search">
        <input
          placeholder="Search your movie here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movies?.length > 0 ?   (
        <div className="container">
          {movies.map((movie) => (
            <Movieverse movie={movie} />
          ))}
        </div>
      ) : (
        <h2>No movies found</h2>
      )}
    </div>
  );
};

export default App;
