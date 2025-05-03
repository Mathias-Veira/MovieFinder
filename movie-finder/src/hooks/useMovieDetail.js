import { useState, useEffect } from "react";
export const useMovieDetail = (movieId) => {
  const [details, setDetails] = useState([]);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  
  const fetchMovieDetails = async() =>{
    try {
      const [detailResponse, castResponse] = await Promise.all([fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=es-ES`, {
        headers:{
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_REACT_APP_API_KEY
    }}),fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=es-ES`,{
        headers:{
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_REACT_APP_API_KEY
    }})]);
      const resDetails = await detailResponse.json();
      const resCast = await castResponse.json();
      setDetails(resDetails);
      setCast(resCast.cast);
      setCrew(resCast.crew);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchMovieDetails();
  }, []);

  return {details,cast,crew}
}
