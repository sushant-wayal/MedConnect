import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './global.css'
import { RouterProvider, createBrowserRouter, createRoutesFromChildren, Route } from 'react-router-dom'
import { DoctorRegister, HospitalRegister, Login, PateintRegister } from './Components/index.js'

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Login/>}/>
      <Route path="/doctorRegister" element={<DoctorRegister/>}/>
      <Route path="/hospitalRegister" element={<HospitalRegister/>}/>
      <Route path="/pateintRegister" element={<PateintRegister/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
