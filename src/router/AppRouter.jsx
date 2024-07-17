import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../auth/pages';
import { HeroesRoutes } from '../heroes';
import { useModeDark } from '../ui/hooks/useModeDark';



export const AppRouter = () => {
   useModeDark()
   console.log('se renderiza AppRouter')
   return (
      <Routes>
         <Route path='/login' element={<LoginPage />} />
         <Route path='/*' element={<HeroesRoutes />} />
      </Routes>
   )
}
