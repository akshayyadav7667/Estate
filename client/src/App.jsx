import React from "react";
// import "./layout.scss";
import {
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./routes/Homepage/Homepage";
import ListPage from "./routes/ListPages/ListPage";
import Layout from "./routes/layout/Layout";
import SinglePage from "./routes/singlePage/SinglePage";

export default function App() {

   const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element: <Homepage/>
        },
        {
          path:'/list',
          element: <ListPage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        }
      ]
    }
  ]);




  return (



    <RouterProvider router={router}/>
   


    // <div className="layout">
    //   <div className="navbar">
    //     <Navbar />
    //   </div>
    //   <div className="content">
    //     <Homepage />
    //   </div>
    // </div>


  )
}
