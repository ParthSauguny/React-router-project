import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Components/Home.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import AboutUs from './Components/AboutUs.jsx'
import Contact from './Components/Contact.jsx'
import Users from './Components/Users.jsx'
import Github , {GitLoader} from './Components/Github.jsx'
//method 1:
//const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       } , 
//       {
//         path: 'about',
//         element: <AboutUs/>
//       },
//       {
//         path: 'contactus',
//         element: <Contact/>
//       }
//     ]
//   }
//])


//loader use krne se API call mouse hover krne pe hi ho jayegi to kaam jaldi bnega

//method 2:
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<AboutUs/>}/>
      <Route path='contactus' element={<Contact/>}/>
      <Route path='user/:userid' element={<Users/>}/>
      <Route loader={GitLoader}
        path='github' 
        element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
