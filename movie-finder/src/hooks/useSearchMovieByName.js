import { useState,useEffect } from "react";
export const useSearchMovieByName = (movies) => {
  const [findMovie, setFindMovie] = useState(false);
  const [movieName, setMovieName] = useState("");
  const [moviesFilteredByName, setMoviesFilteredByName] = useState([])
  const handleOnChange = ({ target }) => {
    const { value } = target;
    setMovieName(value);
  };

  const handleOnBlur = () =>{
    setFindMovie(true);
  }
  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/movies_by_name?titulo=${movieName}`
      );
      const res = await response.json();
      setMoviesFilteredByName(res.content);
      setTotalPages(res.totalPages);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, [handlePage,findMovie]);
  
  return {movieName,moviesFilteredByName, handleOnChange,handleOnBlur}
};
