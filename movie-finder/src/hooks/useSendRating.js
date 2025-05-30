
export const useSendRating = (idPelicula, idUsuario,valoracion,comentario) => {
  const sendRating = async () => {
    try {
      let response = await fetch("http://localhost:8080/api/valoraciones", {
        method: "POST",
        body: JSON.stringify({
          idValorar: 0,
          idUsuario: idUsuario,
          idPelicula: idPelicula,
          valoracion: valoracion,
          fechaValoracion: new Date().toISOString(),

          textoValoracion: comentario
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleClick = () =>{
    sendRating();
  }

  return { handleClick };
};
