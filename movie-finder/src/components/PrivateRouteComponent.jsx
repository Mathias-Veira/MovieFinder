import { Navigate } from "react-router-dom";
//Children es una prop especial que representa cualquier contenido que coloques dentro de un componente.
//En el caso de ser el componente de home, renderizará home
export const PrivateRouteComponent = ({children}) => {
    const user = leerCookie('usuario');

    return user ? children: <Navigate to={'/'}/>
}

function leerCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) {
            return decodeURIComponent(c.substring(nameEQ.length, c.length)
            );
        }
    }
    return null;
}
