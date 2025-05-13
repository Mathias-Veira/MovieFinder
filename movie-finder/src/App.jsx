import { PrivateRouteComponent } from "./components/PrivateRouteComponent"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { MovieDetail } from "./pages/movieDetail/MovieDetail"
import { Registro } from "./pages/registro/Registro"
import {Route,Routes} from "react-router-dom"
import { ComingSoon } from "./pages/soon/ComingSoon"
import { Historial } from "./pages/historial/Historial"
import { Favoritos } from "./pages/Favoritos/Favoritos"
export const App = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/registro" element={<Registro></Registro>}></Route>
            <Route path="/home" element={<PrivateRouteComponent><Home/></PrivateRouteComponent>}/>
            <Route path="/detail/:idPelicula" element={<PrivateRouteComponent><MovieDetail/></PrivateRouteComponent>}/>
            <Route path="/proximamente" element={<PrivateRouteComponent><ComingSoon/></PrivateRouteComponent>}/>
            <Route path="/historial" element={<PrivateRouteComponent><Historial/></PrivateRouteComponent>}/>
            <Route path="/favoritos" element={<PrivateRouteComponent><Favoritos/></PrivateRouteComponent>}/>
        </Routes>
    </>
  )
}
