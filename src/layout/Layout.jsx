import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import SideBarCart from '../components/SideBarCart'

const Layout = () => {
  return (
    <div className='relative'>
        <Navbar />
        <Outlet />
        <SideBarCart />
        <Footer />
    </div>
  )
}

export default Layout