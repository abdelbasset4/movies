import { Fragment, useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../Redux/actions/MoviesActions";

// eslint-disable-next-line react/prop-types
export default function MoviesList() {
  const [movies,setMovies] = useState([])

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllMovies())
  },[])

  const dataMovie = useSelector((state) => state.movies);
  useEffect(()=>{
    setMovies(dataMovie)
  },[dataMovie])
  return (
    <Fragment>
    <div className=" container mx-auto mt-8 grid grid-cols-5 gap-6">
        {
            // eslint-disable-next-line react/prop-types
            movies.length > 0 ? (movies.map((movie)=>{
                return (<Card key={movie.id} movie={movie}/>)
            })):(<h2>There are no Data ....</h2>)
        }
    </div>
    <Pagination/>
    </Fragment>

  )
}
