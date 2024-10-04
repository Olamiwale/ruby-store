import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './home/Home.jsx';
import Shop from './shop/Shop.jsx';
import Contact from './contact/Contact.jsx';
import About from './about/About.jsx'
import ShopDetails from './shop/ShopDetails.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:'/', element: <Home />
      },
      {
        path:'/shop', element: <Shop />
      },
      {
        path:'/about', element: <About />
      },
      {
        path:'/contact', element: <Contact />
      },
      {
        path:'/shop/:id', element: <ShopDetails/>
      },
     
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
