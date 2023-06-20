import MoviesList from "./components/MoviesList"
import { createBrowserRouter,createRoutesFromElements,RouterProvider, Route } from 'react-router-dom'
import Details from "./components/Details"
import RootLayout from "./layouts/RootLayout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route  index element={ <MoviesList/> } />
      <Route  path="/movie/:id" element={ <Details/> } />
      
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
