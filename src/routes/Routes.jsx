import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home/Home'
import SignUp from '../pages/SignUp/SignUp'
import Login from '../pages/Login/Login'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import DashbordLayout from '../layouts/DashbordLayout'
import AddRoom from '../pages/Dashbord/AddRoom/AddRoom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/room/:id',
        element:<RoomDetails></RoomDetails>
      }
    ]
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/signup',
    element:<SignUp></SignUp>
  },
  {
    path:'/dashbord',
    element:<DashbordLayout></DashbordLayout>,
    children:[
      {
        path:'/dashbord/add-room',
        element:<AddRoom></AddRoom>
      }
    ]
  }
])
