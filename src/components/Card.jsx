import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom'
// eslint-disable-next-line react/prop-types
export default function Card({movie}) {
  return (
      // eslint-disable-next-line react/prop-types
      <Link to={`/movie/${movie.id}`}>
        <div className="relative mb-9">
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} loading="lazy" style={{height:"100%"}}/>
              <div className='absolute top-0 left-0 flex flex-col gap-4 items-center justify-center w-full h-full text-xl font-semibold text-white duration-300 text-center bg-black opacity-0 cursor-pointer hover:opacity-70'>
                  <p>{movie.original_title}</p>
                  <p>{movie.release_date}</p>
                  <p><FontAwesomeIcon icon={faUser} size="xs" /> {movie.vote_count}</p>
                  <p><FontAwesomeIcon icon={faStar} size="xs" /> {movie.vote_average}</p>
              </div>
          </div>
      </Link>
        
  )
}
