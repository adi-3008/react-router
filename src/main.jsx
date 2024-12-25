import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import { Layout } from './Layout'
import Home from './home/home'
import { About } from './About'
import Contact from './Contact'
import { User } from './User'

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element: <Layout/>,
//     children: [
//       {
//         path : '',
//         element: <Home/>
//       },
//       {
//         path : 'about',
//         element: <About/>
//       },
//       {
//         path : 'contact',
//         element: <Contact/>
//       } 
//     ]
//   }
// ])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//       <Route path='' element={<Home/>}/>
//       <Route path='about' element={<About/>}/>
//       <Route path='contact' element={<Contact/>}/>
//       <Route path='user/:userid' element={<User/>}/>
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
          <Route index={true} path='home' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='user/:userid' element={<User/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
