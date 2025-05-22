import { useState, useEffect } from "react";

export const useGetValoraciones = (idPelicula) => {
  const [data, setData] = useState([]);

  const fetchMovies = async () => {
    const url = `http://localhost:8080/api/valoraciones/${idPelicula}`;
    try {
      const response = await fetch(
        url
      );
      const res = await response.json();
      if(res.length>0){
        setData(res);
      }
      
    } catch (error) {
      console.error(error);
    }

  };
  useEffect(() => {
    fetchMovies();
  }, []);


  return { data };
}
