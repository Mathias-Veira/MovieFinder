import { useParams } from 'react-router-dom';
import { NavBarComponent } from "../../components/NavBarComponent";
export const MovieDetail = () => {
    const { idPelicula } = useParams();
  return (
    
    <>
        <NavBarComponent></NavBarComponent>
        <div className='container-fluid bg-dark h-100'>
            
        </div>
    </>
  )
}
