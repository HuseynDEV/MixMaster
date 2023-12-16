import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { About, Landing, Error, HomeLayout, NewsLetter, Cocktail } from "./pages"


const router = createBrowserRouter([
  {
    path: "/",
     element: <HomeLayout />,
     errorElement:<Error/>,
    children: [

      {
        index: true,
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
        element: <About />,
        children: [
          { path: "company", element: <h2>our company</h2> },
          { path: "person", element: <h2>joh doe</h2> }
        ]
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
