import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { About, Landing, Error, HomeLayout, NewsLetter, Cocktail } from "./pages"


const router = createBrowserRouter([
  {
    path: "/", element: <HomeLayout />,
    children: [

      {index:true,
        path: '/landing',
        element: <Landing />
      },
      {
        path: '/cocktail',
        element: <Cocktail />
      },
       {
        path: '/newsletter',
        element: <NewsLetter />
      },
      {
        path: "/about",
        element: <About />
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
