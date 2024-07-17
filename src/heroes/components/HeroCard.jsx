import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const HeroCard = ({
   id,
   superhero,
   publisher,
   alter_ego,
   first_appearance,
   characters,
}) => {

   const imgHeroe = `./assets/heroes/${id}.jpg`

   return (
      <>
         <div className='heroCard'>
            <figure>
               <img src={imgHeroe} alt={id} />
            </figure>
            <div>
               <h4>
                  {superhero}
               </h4>
               <span>{alter_ego}</span>
               { alter_ego !== characters && <p>{characters}</p>}
               <small>{first_appearance}</small>

               <Link to={`/heroe/${id}`} className=''>
                  Más...
               </Link>
            </div>
         </div>

      </>
   )
}


HeroCard.propTypes = {
   id: PropTypes.string,
   superhero: PropTypes.string,
   publisher: PropTypes.string,
   alter_ego: PropTypes.string,
   first_appearance: PropTypes.string,
   characters: PropTypes.string,
}