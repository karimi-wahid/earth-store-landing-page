import Layout from "./layout/Layout"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Shop from "./pages/Shop"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/shop',
          element: <Shop />
        },
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
