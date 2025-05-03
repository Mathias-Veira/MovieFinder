export const AboutPageComponent = ({details}) => {
    
  return (
      <div className="row">
        <div className="col-12">
          <div className="d-flex align-items-center mb-3"style={{ paddingLeft: "33.6%" }}>
            <span className="text-white fw-bold">Fecha De Estreno:</span>
            <p className="fs-6 text-white w-25 mb-0 ms-1">
              {new Date(details?.release_date).toLocaleDateString()}
            </p>
          </div>

          <div className="d-flex align-items-center mb-3"style={{ paddingLeft: "33.6%" }}>
            <span className="text-white fw-bold">Duración Película:</span>
            <p className="fs-6 text-white w-25 mb-0 ms-1">
              {formatearDuracionPelicula(details?.runtime)}
            </p>
          </div>

          <div className="d-flex align-items-center mb-3"style={{ paddingLeft: "33.6%" }}>
            <span className="text-white fw-bold">Géneros:</span>
            {details.genres?.map((genero) => (
                <p key={genero.id} className="fs-6 text-white mb-0 ms-1">
                    {genero.name}
                </p>
            ))}
            
          </div>

          <div className="d-flex align-items-center mb-3"style={{ paddingLeft: "33.6%" }}>
            <span className="text-white fw-bold">Productora:</span>
            <img style={{ backgroundColor: "#fff", padding: "4px", borderRadius: "4px", display: "inline-block" }} src={`http://image.tmdb.org/t/p/w92${details?.production_companies?.[0]?.logo_path}`} className="ms-1" alt="" />
            <p className="fs-6 text-white mb-0 ms-1">
                    
                    {details?.production_companies?.[0]?.name}
                </p>
            
            
          </div>
          
        </div>
      </div>
  );

  function formatearDuracionPelicula(minutos){
    let res = "";
    let horas = Math.floor(minutos/60);
    let resto = minutos%60;
    res = horas.toString()+ "h " + resto.toString() + "min"
    return res;
}
};