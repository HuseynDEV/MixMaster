import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { About, Landing, Error, HomeLayout, NewsLetter, Cocktail, SinglePageError } from "./pages"
import { loader as landingLoader } from './pages/Landing'
import { loader as singleCocktailLoader } from './pages/Cocktail'
import { action as newsletterAction } from './pages/NewsLetter'


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [

      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader
      },
      {
        path: '/cocktail/:id',
        element: <Cocktail />,
        loader: singleCocktailLoader,

      },
      {
        path: '/newsletter',
        element: <NewsLetter />,
        action:newsletterAction,
        errorElement:<SinglePageError/>
      },
      {
        path: "/about",
        element: <About />,
      }
    ]
  }

])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
