import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Products from "./components/Products.tsx";
import VisMis from "./components/VisMis.tsx";
import Services from "./components/Services.tsx";
import ServiceTiles from "./components/ServiceTiles.tsx";
import Gallery from "./components/Gallery.tsx";
import Socials from "./components/Socials.tsx";

const router = createBrowserRouter([{
        path: "/",
        element: <App />,
        children: [{
            index: true,
            element: [<Home />, <Products />]
        }, {
            path: "about",
            element: [<About />, <VisMis />]
        }, {
            path: "services",
            element: [<Services />, <ServiceTiles />]
        }, {
            path: "gallery",
            element: [<Gallery />, <Socials />]
        }]
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
