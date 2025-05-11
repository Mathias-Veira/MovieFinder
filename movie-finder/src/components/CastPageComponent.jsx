export const CastPageComponent = ({ cast, crew }) => {
  let crewMembers = crew
    ?.filter((equipo) => equipo.profile_path != null)
    .slice(0, 10);
  let auxiliar = [];
  let similarCrewMembers = [];
  return (
    <div className="row">
      <div className="col-12" style={{ paddingLeft: "33.6%" }}>
        <h1 className="text-white fs-2 my-3 text-decoration-underline">
          Actores
        </h1>
        <div className="d-flex flex-wrap gap-5 w-50">
          {cast
            ?.filter((reparto) => reparto.profile_path != null)
            .slice(0, 10)
            .map((reparto) => {
              return (
                <div
                  key={`cast-${reparto?.id}`}
                  className="d-flex align-items-start mb-3 flex-column"
                  style={{maxWidth:"100px"}}
                >
                  <img
                    src={`http://image.tmdb.org/t/p/w92${reparto?.profile_path}`}
                    className="ms-1"
                    alt=""
                  ></img>
                  <p className="fs-6 text-white w-25 mb-0 ms-1">
                    {reparto.name}
                  </p>
                  <p className="fs-6 text-white w-25 mb-0 ms-1">
                    {reparto.character}
                  </p>
                </div>
              );
            })}
        </div>
        <h1 className="text-white fs-2 my-3 text-decoration-underline">
          Equipo técnico
        </h1>
        <div className="d-flex flex-wrap gap-5 w-50">
          {crewMembers.map((equipo) => {
            if (!auxiliar.includes(equipo.name)) {
              auxiliar.push(equipo.name);
              similarCrewMembers = crewMembers.filter(
                (member) => member.name == equipo.name
              );
              const seenDepartments = [];
              similarCrewMembers = similarCrewMembers.filter((item) => {
                if (seenDepartments.includes(item.department)) return false;
                seenDepartments.push(item.department);
                return true;
              });
              return (
                <div
                  key={`crew-${equipo?.id}`}
                  className="d-flex align-items-start mb-3 flex-column"
                >
                  <img
                    src={`http://image.tmdb.org/t/p/w92${equipo?.profile_path}`}
                    className="ms-1"
                    alt=""
                  ></img>
                  <p className="fs-6 text-white w-25 mb-0 ms-1">
                    {equipo.name}
                  </p>
                  <p className="fs-6 text-white w-100 mb-0">
                    {similarCrewMembers.map((member,index) => member.department + (index == similarCrewMembers.length -1 ?" ":","))}
                  </p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
