import { useState,useEffect } from "react";
export const useMarkMovies = (idPelicula, idUsuario) => {
  const [seen, setSeen] = useState(false);
  const [favourite, setFavourite] = useState(false);
  const markMovieAsSeen = () => {
    setSeen(!seen);
    marcarPeliculaComoVista(idPelicula,idUsuario,!seen);
  };
  const markMovieAsFavourite = () => {
    setFavourite(!favourite);
    marcarPeliculaComoFavorita(idPelicula, idUsuario,!favourite);
  };

  useEffect( () => {
    async function obtenerEstadoPeliculas(){
    const peliVista = await fetchMoviesSeen();
    const peliFavoritos = await fetchMoviesFavourites();
    if(peliVista){
      setSeen(true);
    }else{
      setSeen(false);
    };
    if(peliFavoritos){
      setFavourite(true);
    }else{
      setFavourite(false);
    };
    }
    obtenerEstadoPeliculas();
  }, [])
  const fetchMoviesSeen = async () => {
    
    try {
      const response = await fetch(
        `http://localhost:8080/api/historial/${idUsuario}/${idPelicula}`
      );
      const respuesta = await response.json();
      if(response.status == 200){
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
    }

  };

  const fetchMoviesFavourites = async () => {
    
    try {
      const response = await fetch(
        `http://localhost:8080/api/favoritos/${idUsuario}/${idPelicula}`
      );
      const respuesta = await response.json();
      if(response.status==200){
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
    }

  };
  
  return { markMovieAsSeen, markMovieAsFavourite,seen,favourite };
};

async function marcarPeliculaComoVista(idPelicula, idUsuario,seen) {
  try {
    if(seen){
      let response = await fetch("http://localhost:8080/api/historial", {
      method: "POST",
      body: JSON.stringify({
        idHistorial: 0,
        idUsuario: idUsuario,
        idPelicula: idPelicula,
        fechaVisto: new Date(),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    }else{
      let response = await fetch(`http://localhost:8080/api/eliminar/historial/${idUsuario}/${idPelicula}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    
    }
    
  } catch (error) {
    console.error(error);
  }
}

async function marcarPeliculaComoFavorita(idPelicula, idUsuario,favourite) {
  try {
    if(favourite){
      let response = await fetch("http://localhost:8080/api/favoritos", {
      method: "POST",
      body: JSON.stringify({
        idFavorito: 0,
        idUsuario: idUsuario,
        idPelicula: idPelicula,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    }else{
      let response = await fetch("http://localhost:8080/api/eliminar/favoritos", {
      method: "DELETE",
      body: JSON.stringify({
        idFavorito: 0,
        idUsuario: idUsuario,
        idPelicula: idPelicula,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      
    });
    }
  } catch (error) {
    console.error(error);
  }
}
