import { PrivateRouteComponent } from "./components/PrivateRouteComponent"
import { Home } from "./pages/Home"
import { Login } from "./pages/login/Login"
import { Registro } from "./pages/Registro"
import {Route,Routes} from "react-router-dom"
export const App = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/registro" element={<Registro></Registro>}></Route>
            <Route path="/home" element={<PrivateRouteComponent><Home/></PrivateRouteComponent>}/>

        </Routes>
    </>
  )
}
