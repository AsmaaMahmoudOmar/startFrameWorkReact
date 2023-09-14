
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

import { RouterProvider,createBrowserRouter, createHashRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';

let Routers = createHashRouter([
  {path:'',element:<Layout/>,children:[
    {path:'/',element:<Home/>},
    {path:'home',element:<Home/>},
    {path:'about',element:<About/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'contact',element:<Contact/>},
    {path:'*',element:<NotFound/>},
  ]}
])
export default function App() {
  return (
    <>
  <RouterProvider router={Routers}/>

    </>
  )
}
