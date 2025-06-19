import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Home from '../pages/Home';
import About from '../pages/About';
import Country from '../pages/country';
import Applayout from '../components/Applayout';
import ErrorPage from '../pages/ErrorPage';
import Contact from '../pages/contact';
import CountryPage from '../pages/CountryPage';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/country",
          element: <Country />
        },
        {
          path: "/country/:name",
          element: <CountryPage />
        }

      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
