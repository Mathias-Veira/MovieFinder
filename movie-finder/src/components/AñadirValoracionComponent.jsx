import { useState } from "react";
import { Box, Rating } from "@mui/material";
import { useSendRating } from "../hooks/useSendRating";
export const AñadirValoracionComponent = ({ idPelicula, idUsuario }) => {
     const [valoracion, setValoracion] = useState(0);
     const [comentario, setComentario] = useState("");
    const {handleClick} = useSendRating(parseInt(idPelicula),idUsuario,valoracion,comentario);
  return (
    <>
      <h1
        className="text-white fs-2 my-3 text-decoration-underline"
        style={{ paddingLeft: "33.6%" }}
      >
        Tu Valoración
      </h1>
      <Box>
        <Box sx={{ mb: 4 }}>
          <div className="row" >
            <div className="col-12 d-flex flex-column" style={{ paddingLeft: "33.6%" }}>
              <h3>Añadir valoración</h3>

              <Rating
                name="nueva-valoracion"
                readOnly={false}
                value={valoracion}
                onChange={(event, newValue) => setValoracion(newValue)}
                sx={{
                  mb: 2,
                  "& .MuiSvgIcon-root": {
                    stroke: "white",
                    strokeWidth: 1,
                  },
                }}
              />

              <textarea
                placeholder="Escribe tu comentario..."
                rows="4"
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
                style={{
                  width: "75%",
                  padding: "8px",
                  fontSize: "14px",
                  marginBottom: "12px",
                  resize: "vertical",
                }}
              />

              <button className="w-25" onClick={handleClick}>Enviar valoración</button>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};
