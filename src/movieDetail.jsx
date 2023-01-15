import React, { useEffect, useState } from 'react'
import queryString from 'query-string';
import axios from 'axios'

export default function MovieDetail() {
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
  const [id, movieId] = useState();
  const [currentPageUrl, setCurrentPageUrl] = useState()
  const [getSimilarMovie, setSimilarMovieUrl] = useState();
  const [loading, setLoading] = useState(true)
  const [movieDetail, setMovieDetail] = useState();
  const [similarMovie, setSimilar] = useState();
  const getMovieDetailUrl = (id) => `${ROOT_URL}/movie/${id}?${queryString(defaultQuery)}`;

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    console.log(query.get("id"))
    movieId(query.get("id"));
  }, []);

  useEffect(() => {
    setCurrentPageUrl(getMovieDetailUrl(id))
    setSimilarMovieUrl(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${defaultQuery.api_key}`)
  }, [id])

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      console.log(res.data)
      setMovieDetail(res.data)
    })

    axios.get(getSimilarMovie, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setLoading(false)
      console.log(res.data)
      setSimilar(res.data.results)
    })

    return () => cancel()
  }, [currentPageUrl, getSimilarMovie])

  if (loading) return "loading..."

  return (
    <>
      
      {movieDetail &&
        <div className='movieDetail'>
          <img src={  `https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`} alt="" />
          <div className="title">{movieDetail.original_title}</div>
          <div className="releaseDate">{movieDetail.release_date}</div>
          <div className="overview">
            {movieDetail.overview}
          </div>
        </div>
      }
      <h3 className='h3'>Similar Movies</h3>
      <div className='wrapper'>
      {similarMovie &&
        similarMovie.map(movie => {
          return <div className="card1">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" srcset="" />
            <div className="title">{movie.original_title}</div>
            <a href={`/movieDetail?id=${movie.id}`}>View Details</a>
          </div>
          
        }
        )}
        
        </div>
    </>
  );


}
