import { Fragment} from "react"
import Navbar from "./components/Navbar"
import MoviesList from "./components/MoviesList"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from "./components/Details"


function App() {
  


  

  

  return (

     <Fragment>
      <Navbar/>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoviesList/>}/>
          <Route path="/movie/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
     </Fragment>
  )
}

export default App
