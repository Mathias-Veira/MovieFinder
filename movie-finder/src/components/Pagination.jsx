
import { Pagination } from '@mui/material'

export const Pagination = () => {
  const [pagination, setPagination] = useState({
    paginaActual:0,
    totalPaginas:500,
    peliculasPorPagina:20
  });
  const handleChange = (page) =>{
      setPagination({
        paginaActual:page,
      });
  }

  
  return (
    <div>
      <Pagination onChange={handleChange} count={totalPaginas} showFirstButton showLastButton></Pagination>
    </div>
  )
}
