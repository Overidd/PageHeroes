import { Navigate, useParams } from "react-router-dom"
import { getHeroByid } from "../helpers";



export const HeroePage = () => {
  const {id} = useParams();
  const heroe = getHeroByid(id)

  // si retorna heroe un undefaill, por el Navigate lo redirigimos a /marvel
  if(!heroe){
    return <Navigate to={'/marvel'}/>
  }
  
  return (
    <div>HeroePage</div>
  )
}
