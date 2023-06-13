import { Fragment, useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import MoviesList from "./components/MoviesList"
import axios from "axios"


function App() {
  const [movies,setMovies] = useState([])
  const [page,setPage] = useState(1)
  
  const getAllMovies = async()=>{
      const result = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=f5192ac4b8604550d16a0f96f35907a0")
      setMovies(result.data.results)
      setPage(result.data.total_pages)
  }

  const getMoviesFromPage = async(page)=>{
      const result = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f5192ac4b8604550d16a0f96f35907a0&page=${page}`)
      setMovies(result.data.results)
      setPage(result.data.total_pages)
  }

  const searchMovie = async(word)=>{
      if(word === ""){
        getAllMovies()
      }else{
        const result = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f5192ac4b8604550d16a0f96f35907a0&query=${word}`)
      setMovies(result.data.results)
      setPage(result.data.total_pages)
      }
  }

  useEffect(()=>{
    getAllMovies();
  },[])

  return (

     <Fragment>
      <Navbar search = {searchMovie}/>
      <MoviesList movies={movies} page={page} getMoviesFromPage={getMoviesFromPage}/>
      
     </Fragment>
  )
}

export default App
