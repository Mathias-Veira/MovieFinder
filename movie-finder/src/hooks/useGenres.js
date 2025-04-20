import { useState, useEffect } from "react";
export const useGenres = () => {
    const [genre, setGenre] = useState([]);

    const fetchGenres = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/generos`
        );
        const res = await response.json();
        setGenre(res);
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
        fetchGenres();
    }, []);
  
    return { genre };
}
