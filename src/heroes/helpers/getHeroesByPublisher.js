import { heroes } from '../../data/heroes'


export const getHeroesByPublisher = (publisiher) => {

   const validPublishers = ['DC Comics', 'Marvel Comics']
   if (!validPublishers.includes(publisiher)) {
      throw new Error(`${publisiher} is not a valid publisiher`)
   }
   console.log('Se ejecuta getHeroesByPublisher')

   return heroes.filter(({ publisher }) => publisher === publisiher)
}
