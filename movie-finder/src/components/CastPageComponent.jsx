export const CastPageComponent = ({ cast, crew }) => {
  return (
    <div className="row">
      <div className="col-12" style={{ paddingLeft: "33.6%" }}>
        <h1 className="text-white fs-2 my-3 ">Actores</h1>
        <div className="d-flex flex-wrap gap-5 w-50 ">
        {cast?.filter((reparto)=>reparto.profile_path != null).slice(0,10).map((reparto) =>{
              return(
                <div key={reparto?.id} className="d-flex align-items-start mb-3 flex-column">
                  <img src={`http://image.tmdb.org/t/p/w92${reparto?.profile_path}`}className="ms-1" alt=""></img>
                  <p className="fs-6 text-white w-25 mb-0 ms-1">{reparto.name}</p>
                  <p className="fs-6 text-white w-25 mb-0 ms-1">{reparto.character}</p>
                </div>
              )    
        })}
        </div>
        <h1 className="text-white fs-2 my-3 text-decoration-underline">Equipo técnico</h1>
        <div className="d-flex flex-wrap gap-5 w-50">
        {crew?.filter((equipo)=>equipo.profile_path != null).slice(0,10).map((equipo) =>{
              return(
                <div key={equipo?.id} className="d-flex align-items-start mb-3 flex-column">
                  <img src={`http://image.tmdb.org/t/p/w92${equipo?.profile_path}`}className="ms-1" alt=""></img>
                  <p className="fs-6 text-white w-25 mb-0 ms-1">{equipo.name}</p>
                  <p className="fs-6 text-white w-25 mb-0 ms-1">{equipo.department}</p>
                </div>
              )    
        })}
        </div>
      </div>
    </div>
  );
};
