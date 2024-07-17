
import { useEffect, useState } from 'react'

const body = document.body;

export const useModeDark = () => {
   const [modeDark, setModeDark] = useState(localStorage.getItem('modeDark') === 'true')

   useEffect(() => {
      if (modeDark) {
         body.classList.remove('light')
         body.classList.add('dark')
      } else {
         body.classList.remove('dark')
         body.classList.add('light')
      }
      localStorage.setItem('modeDark', JSON.stringify(modeDark));

      console.log('Se ejecuta useModeDark')
      console.log(modeDark)

   }, [modeDark])

   const onModeDark = () => {
      setModeDark(!modeDark)
      // localStorage.setItem('modeDark', JSON.stringify(!modeDark));
   }
   return {
      modeDark,
      onModeDark
   }
}
