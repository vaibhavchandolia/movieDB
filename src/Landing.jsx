import React, { useState, useEffect } from "react";
import axios from 'axios'
import './app.css';
import movieDetail from "./movieDetail";



function Landing() {
  const [topMovie, settopMovie] = useState([""])
  const ROOT_URL = "https://api.themoviedb.org/3";
  const IMAGE_URL = "https://image.tmdb.org/t/p/";
  const API_KEY = "1abb3e68d878be1155d781ce812f80a8";

  const defaultQuery = {
    api_key: API_KEY,
    language: "en-US",
    // include_adult: true,
    // region: "ID",
  };

  const queryString = (obj) => {
    return Object.entries(obj)
      .map(([index, val]) => `${index}=${val}`)
      .join("&");
  };

  const getPopularMoviesUrl = (page) => `${ROOT_URL}/movie/popular?${queryString({ ...defaultQuery, ...{ page } })}`;
  const t = encodeURI("game of")
  const [currentPage, setCurrentPage] = useState(1)
  const [currentPageUrl, setCurrentPageUrl] = useState(getPopularMoviesUrl())
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setCurrentPageUrl(getPopularMoviesUrl(currentPage));
  }, [currentPage]);

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      console.log(res.data)
      settopMovie(res.data.results)
    })

    return () => cancel()
  }, [currentPageUrl])

  if (loading) return "loading..."

  function goNextPage(e) {
    e.preventDefault();
    console.log("sasdmaksd")
    setCurrentPage(currentPage+1)
  }

  function goPrevPage(e) {
    e.preventDefault();
    setCurrentPage(currentPage - 1)
  }


  return (
    <>
      {/* <topMovieList topMovie ={topMovie}/> */}
      <div className="grid">
        
        {topMovie && topMovie.map((movie,i) => {
          return <div  key={i} className="card">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}  />
            <div className="head"><h3 className="title">{movie.original_title}</h3></div>
            <a className="link" href={`/movieDetail?id=${movie.id}`}>View Details</a>
          </div>
        })}
        
      </div>
      <div className="button">
        <button className="b1" value="Prev Page" onClick={goPrevPage}>Prev Page</button>
        <button className="b1" value="Next Page" onClick={goNextPage}>Next Page</button>
      </div>    
    </>
  );
}

export default Landing;
