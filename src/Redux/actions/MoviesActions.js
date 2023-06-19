import axios from "axios";

export const getAllMovies = () =>{
    return async(dispatch)=>{
        const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=f5192ac4b8604550d16a0f96f35907a0")
        dispatch({type:"ALLMOVIES",movies:res.data.results , pageCount: res.data.total_pages })
    }
}

export const getMoviesFromPage = (page)=>{
    return async(dispatch)=>{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f5192ac4b8604550d16a0f96f35907a0&page=${page}`)
        dispatch({type:"ALLMOVIES",movies:res.data.results , pageCount: res.data.total_pages })
    }
}

export const searchMovie = (word)=>{
    return async(dispatch)=>{
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f5192ac4b8604550d16a0f96f35907a0&query=${word}`)
        dispatch({type:"ALLMOVIES",movies:res.data.results , pageCount: res.data.total_pages })
    }
}