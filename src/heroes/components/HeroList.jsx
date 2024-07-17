import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import { HeroCard } from "./HeroCard";
import PropTypes from 'prop-types';


export const HeroList = ({ publisher }) => {
   const heroes = getHeroesByPublisher(publisher)

   return (
      <>
         <section className="heroList">
            {
               heroes.map((heroe) => (
                  <HeroCard key={heroe.id} {...heroe} />
               ))
            }
         </section>

      </>
   )
}

HeroList.propTypes = {
   publisher: PropTypes.string.isRequired,
}