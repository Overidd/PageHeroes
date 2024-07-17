import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useModeDark } from '../hooks/useModeDark'
import { useState } from 'react'


export const NavBar = () => {
   const [closeMenu, setCloseMenu] = useState(false)
   const { modeDark, onModeDark } = useModeDark()
   const navigate = useNavigate()

   const onLogout = () => {
      // se derige ala pagina de login
      // replace: true, Evita volver al historial anterior 
      navigate('/login',{
         replace: true,
      })
   }
   return (
      <nav className='menu'>
         <Link to={'/'}>
            Asociaciones
         </Link>
         <span className='menuhamburs' onClick={() => setCloseMenu(!closeMenu)} >=</span>
         <ul className={`menu-list  ${closeMenu ? 'close' : ''}`}>
            <NavLink to='/marvel' className={({ isActive }) => `list-nav ${isActive ? 'activeLink' : ''}`} >
               Marvel
            </NavLink>
            <NavLink to='/dc' className={({ isActive }) => `list-nav ${isActive ? 'activeLink' : ''}`} >
               DC
            </NavLink>

            <NavLink to='/search' className={({ isActive }) => `list-nav ${isActive ? 'activeLink' : ''}`} >
               Search
            </NavLink>

            <NavLink to='/Heroe' className={({ isActive }) => `list-nav ${isActive ? 'activeLink' : ''}`} >
               Heroe
            </NavLink>

            <span className='user'>
               John
            </span>
            <button className='logout' onClick={onLogout}>
               Logout
            </button>

            <label htmlFor="switch" className='labelSwitch'>
               <input type='checkbox' id='switch' onClick={onModeDark} />
               <div className={`divSwitch ${modeDark ? 'openSwitch' : ''}`}></div>
            </label>
         </ul>
      </nav>
   )
}
