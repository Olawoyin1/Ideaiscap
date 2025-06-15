// import React from 'react'
import { Outlet } from 'react-router'
// import Footer from '../components/Footer'
// import ScrollToTop from '../utils/ScrollToTop'
// import Navbar from '../components/Navbar'
// import ScrollToTopButton from '../utils/ScrollToTopButton'

const SharedLayout = () => {
  return (
    <div>
        {/* <Navbar /> */}
        {/* <ScrollToTopButton /> */}
        {/* <ScrollToTop /> */}
        <Outlet />
        {/* <Footer /> */}
    </div>
  )
}

export default SharedLayout