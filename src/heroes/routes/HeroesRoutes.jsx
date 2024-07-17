import { Routes, Route, Navigate } from "react-router-dom"
import { NavBar } from "../../ui/components"
import { DcPage, MarvelPage, SearchPage, HeroePage } from "../pages"

export const HeroesRoutes = () => {
   return (
      <>
         <NavBar />
         <div className='container'>
            <Routes>
               <Route path='/marvel' element={<MarvelPage />} />
               <Route path='/dc' element={<DcPage />} />
               <Route path='/search' element={<SearchPage />} />
               <Route path='/heroe/:id' element={<HeroePage />} />

               <Route path='/' element={<Navigate to={'marvel'} />} />
            </Routes>
         </div>
      </>
   )  
}
