import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const useFetchFavouritesSeen = (isFavourite) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const fetchMovies = async () => {
    let user = leerCookie('usuario');
    user = JSON.parse(JSON.parse(user));
    const url = isFavourite? `http://localhost:8080/api/favoritos/${user.idUsuario}`:`http://localhost:8080/api/historial/${user.idUsuario}`;
    try {
      const response = await fetch(
        url);
      const res = await response.json();
      setData(res);
    } catch (error) {
      console.error(error);
    }

  };
  useEffect(() => {
    fetchMovies();
  }, []);

  const navigateToDetail = (idPelicula) =>{
    navigate(`/detail/${idPelicula}`);
  }

  return { data,navigateToDetail };
}

function leerCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) {
      return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
  }
  return null;
}
