import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const useFetchComingSoon = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0)
  const [handlePage, setHandlePage] = useState(1);

  const handleChange = (_,page) => {
    setHandlePage(page-1);
  };


  const fetchMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/upcoming?language=es-ES&page=${handlePage+1}&region=ES`;
    try {
      const response = await fetch(
        url, {
        headers:{
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_REACT_APP_API_KEY
    }
    });
      const res = await response.json();
      setData(res.results);
      setTotalPages(res.total_pages);
    } catch (error) {
      console.error(error);
    }

  };
  useEffect(() => {
    fetchMovies();
  }, [handlePage]);

  const navigateToDetail = (idPelicula) =>{
    navigate(`/detail/${idPelicula}`);
  }

  return { data, handleChange,totalPages,handlePage,navigateToDetail };
};
