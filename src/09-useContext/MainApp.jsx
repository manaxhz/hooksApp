import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { UserProvider } from './context/UserProvider'
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'
import { NavBar } from './NavBar'


export const MainApp = () => {
  return (
    <UserProvider>
      <NavBar/>

      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>


          {/* <Route path='/*' element={<LoginPage/>}/>  //Esta es una forma de hacerlo*/}
          <Route path='/*' element={<Navigate to="/about"/>}/>




      </Routes>
    </UserProvider>
  )
}
