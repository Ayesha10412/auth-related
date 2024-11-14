import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root.jsx';
import Home from './component/Home.jsx';
import Login from './component/Login.jsx';
import Register from './component/Register.jsx';
import NavBar from './component/NavBar.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';
import Order from './component/Order.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[

{

  path: '/',
  element: <Home></Home>

},
{
  path: 'login',
  element: <Login></Login>
},
{
  path: 'register',
  element: <Register></Register>
},

{
  path: 'navbar',
  element: <NavBar></NavBar>
},

{
  path:'order',
  element: <PrivateRoute><Order></Order></PrivateRoute>
},


    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProviders>
<RouterProvider router={router} />

</AuthProviders>

  </StrictMode>,
)
