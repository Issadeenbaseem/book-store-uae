import {
    createBrowserRouter,    
  } from "react-router";

import App from "../App";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <p>Home</p>,
        },
        {
            path: "/about",
            element: <p>About</p>,
        },
        {
            path: "/order", 
            element: <p>Order</p>,
        }
      ],
    },
  ]);

  export default router