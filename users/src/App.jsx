import React, { lazy,Suspense } from 'react';
import Head from './component/header.ui';
import Footer from './component/footer.ui';
import Body from './component/body.ui';
import Contact from './component/contact.ui';
import About from "./component/about.ui"
import { createBrowserRouter, Outlet } from 'react-router';
import Card from '../utils/api.ui';
import Profile from './component/profile.ui';
// import InstaMart from './component/instamart.ui';

// this is the promise and the 
const InstaMart = lazy(() => import("./component/instamart.ui"))

// be aware that 
// upon on-demand loding => upon render => react suspands to loading ; 
const App = () => {
  
  return (
    <>
      <Head />
      <Outlet />
      <Footer/>
    </>
  )
}
// when you using the on-demand 
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path:"profile", /** parent/{path} => local:8080/about/profile */
            element: <Profile />
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/card/:resID",
        element: <Card />
      },
      {
        path: "/insta",
        element: <Suspense fallback={<h1>loding.......</h1> }>
          <InstaMart />
          </Suspense>
      }

    ]

  },
  
]);

export default AppRouter;
