import Layout from "./layout/Layout"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Shop from "./pages/Shop"
import Payment from "./pages/Payment"
import Cart from "./pages/Cart"
import Product from "./pages/Product"

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
        {
          path: '/product/:type/:id',
          element: <Product />
        },
        {
          path: '/cart',
          element: <Cart />
        },
        {
          path: '/payment/checkout',
          element: <Payment />
        },
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
