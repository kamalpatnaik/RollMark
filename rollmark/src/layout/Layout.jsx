import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import AppBar from '../components/AppBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Layout = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false)

  return (
    <div className="w-full min-h-screen flex flex-col m-0 p-0 overflow-hidden bg-white">
      {/* App Bar */}
      <AppBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />

      {/* Sidebar (mobile) */}
      <div className="md:hidden">
        <SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
      </div>

      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 backdrop-blur-md bg-black/10 transition-opacity duration-300 z-40 md:hidden ${
          sideBarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setSideBarOpen(false)}
      />

      {/* Page Content */}
      <main className="flex-1 w-full pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Layout
