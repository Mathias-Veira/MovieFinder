import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const useFetchData = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0)
  const [handlePage, setHandlePage] = useState(0);
  const [movieName, setMovieName] = useState("");
  let isFindMovie = true;

  const handleChange = (_,page) => {
    setHandlePage(page-1);
  };
  const handleOnChange = ({ target }) => {
    const { value } = target;
    setMovieName(value);
    if(value.trim()===''){
      isFindMovie = false;
    }
    setHandlePage(0);
  };

  const fetchMovies = async () => {
    const url = !isFindMovie? `http://localhost:8080/api/movies?page=${handlePage}`:`http://localhost:8080/api/movies_by_name?titulo=${movieName}&page=${handlePage}`;
    try {
      const response = await fetch(
        url
      );
      const res = await response.json();
      setData(res.content);
      setTotalPages(res.totalPages);
    } catch (error) {
      console.error(error);
    }

  };
  useEffect(() => {
    const getData = setTimeout(fetchMovies,500);
    return () => clearTimeout(getData);
  }, [handlePage,movieName]);

  const navigateToDetail = (idPelicula) =>{
    navigate(`/detail/${idPelicula}`);
  }

  return { data, handleChange,handleOnChange,totalPages,handlePage,movieName,navigateToDetail };
};
