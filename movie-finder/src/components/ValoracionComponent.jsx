import { Box, Typography, Rating, Avatar, Stack } from "@mui/material";
import { useGetValoraciones } from "../hooks/useGetValoraciones";
export default function ValoracionComponent({ idPelicula }) {
  const { data } = useGetValoraciones(idPelicula);
  return (
    <>
      <h1 className="text-white fs-2 my-3 text-decoration-underline" style={{ paddingLeft: "33.6%" }}>
          Valoraciones
        </h1>
      <Box>
        {data?.map((review) => (
          <div className="row" key={review.idValorar}>
            <div className="col-12" style={{ paddingLeft: "33.6%" }}>
              <Box key={review.idValorar} mb={4}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar src={review.avatar} alt={review.nombreUsuario} />
                  <Box>
                    <Typography fontWeight="bold" color="white">{review.nombreUsuario}</Typography>
                    <Typography variant="caption" color="white">
                      {review.fechaValoracion}
                    </Typography>
                  </Box>
                </Stack>
                <Rating value={review.valoracion} readOnly sx={{ mt: 1 }} />
                <Typography color="white" sx={{ mt: 1 }}>{review.textoValoracion}</Typography>
              </Box>
            </div>
          </div>
        ))}
      </Box>
    </>
  );
}
