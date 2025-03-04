import ReactDom from "react-dom/client";
import React from "react";
import "./App.css"
import { RouterProvider } from "react-router";
import AppRouter from "./App";
const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <>
    <RouterProvider router={AppRouter} />
  </>
 );
