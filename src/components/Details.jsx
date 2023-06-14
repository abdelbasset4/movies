
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookmark, faHeart, faList, faPlay, faStar } from '@fortawesome/free-solid-svg-icons'
import PercentageCircle from "./PercentageCircle"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "axios"


export default function Details() {
  const params = useParams();
  const [movie,setMovie] = useState([]);

  const getMovieDetails = async()=>{
    const result = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=f5192ac4b8604550d16a0f96f35907a0`)
    setMovie(result.data)

  }

  useEffect(()=>{
    getMovieDetails()
  },[])
  return (
    <div className='relative image-bg'>
    <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} className="absolute top-0 left-0 object-cover h-full image-bg"/>
    <div className="absolute top-0 left-0 w-full h-full image-bg"></div>
        <div className="container relative grid grid-cols-3 mx-auto py-7">

        <div className="w-[350px]">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
        </div>
        <div className='col-span-2 pt-8 text-white'>
            <h1 className="py-3 text-3xl font-extrabold">{movie.original_title} ({new Date(movie.release_date).getFullYear()})</h1>
            <ul className="flex gap-3 text-lg">
              {
                movie.genres?.map((genre)=>{
                  // eslint-disable-next-line react/jsx-key
                 return (<li>{genre.name} - </li>)
                  
                })
              }
              <li>{`${Math.floor(movie.runtime / 60)}h${movie.runtime % 60}min` }</li>
            </ul>
            <div className="flex mt-4 items-center">
              <PercentageCircle value={Math.ceil(movie.vote_average * 10)}/>
              <ul className="flex gap-3 justify-center items-center ms-6">
                <li className="w-[50px] h-[50px] bg-slate-950 rounded-full flex justify-center items-center cursor-pointer hover:bg-emerald-950 duration-300"><FontAwesomeIcon icon={faList} size="base"  /></li>
                <li className="w-[50px] h-[50px] bg-slate-950 rounded-full flex justify-center items-center cursor-pointer hover:bg-emerald-950 duration-300"><FontAwesomeIcon icon={faHeart} size="base" /></li>
                <li className="w-[50px] h-[50px] bg-slate-950 rounded-full flex justify-center items-center cursor-pointer hover:bg-emerald-950 duration-300"><FontAwesomeIcon icon={faBookmark} size="base" /></li>
                <li className="w-[50px] h-[50px] bg-slate-950 rounded-full flex justify-center items-center cursor-pointer hover:bg-emerald-950 duration-300"><FontAwesomeIcon icon={faStar} size="base" /></li>
              </ul>
              <a href={movie.homepage} className="ms-3 text-lg leading-4	hover:text-slate-950 font-semibold duration-300"><FontAwesomeIcon icon={faPlay} className="ms-4"/> <span className="ms-1">watch</span></a>
            </div>
            <h4 className="mb-4 text-xl mt-7">Overview</h4>
            <p>{movie.overview}</p>
        </div>

    </div>
    </div>

  )
}
