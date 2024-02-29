import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainPage from "./pages/main";
import Catalog from "./pages/catalog";
import './styles/global/index.scss'

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/catalog",
        element: <Catalog />,
    },
]);

function App() {
  return (
      <React.StrictMode>
          <RouterProvider router={router} />
      </React.StrictMode>
  );
}

export default App;
