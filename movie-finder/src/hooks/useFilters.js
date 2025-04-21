import { useState, useEffect } from "react";
export const useFilters = () => {
    const [movies, setMovies] = useState([]);
    const [paginasTotales, setPaginasTotales] = useState(0)
    const [handleFilterPage, setHandleFilterPage] = useState(0);
    const [idGenero, setIdGenero] = useState(0);
    const handleFilterChange = (_,page) => {
      setHandleFilterPage(page-1);
    };

    const handleGenreChange = (event) =>{
        setIdGenero(event.target.value);
        setHandleFilterPage(0);
    }
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/movies/genres/${idGenero}?page=${handleFilterPage}`
        );
        const res = await response.json();
        setMovies(res.content);
        setPaginasTotales(res.totalPages);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      fetchMovies();
    }, [handleFilterPage,idGenero]);
  
    return { movies, handleFilterChange,handleGenreChange,paginasTotales,handleFilterPage };
}
