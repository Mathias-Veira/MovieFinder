import { useState, useEffect } from "react";
export const useFetchData = () => {
  const [data, setData] = useState([]);
  const [handlePage, setHandlePage] = useState(0);
  const handleChange = (_,page) => {
    setHandlePage(page-1);
  };
  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/movies?page=${handlePage}`
      );
      const res = await response.json();
      setData(res.content);
      
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, [handlePage]);

  return { data, handleChange };
};
