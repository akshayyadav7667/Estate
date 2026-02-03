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
import ProfilePage from "./routes/profilePage/ProfilePage";
import Register from "./routes/register/Register";
import Login from "./routes/login/Login";

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
        },
        {
          path:"/profile",
          element:<ProfilePage/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/login",
          element: <Login/>
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
