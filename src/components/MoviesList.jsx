import { Fragment } from "react";
import Card from "./Card";
import Pagination from "./Pagination";

// eslint-disable-next-line react/prop-types
export default function MoviesList({movies ,page ,getMoviesFromPage}) {
    console.log(movies);
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
    <Pagination page={page} getMoviesFromPage={getMoviesFromPage}/>
    </Fragment>

  )
}
