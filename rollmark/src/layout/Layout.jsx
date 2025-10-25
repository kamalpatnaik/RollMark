import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import AppBar from '../components/AppBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false)

  return (
    <div className="w-full flex min-h-screen relative flex-col">
      {/* Sidebar (mobile only) */}
      <div className="md:hidden">
        <SideBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
      </div>

      {/* Blurred Overlay */}
      <div
        className={`fixed inset-0 backdrop-blur-md bg-black/10 transition-opacity duration-300 z-40 md:hidden ${
          sideBarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setSideBarOpen(false)}>
      </div>

      <div className="flex-1 flex flex-col bg-slate-50 relative z-0">
        <AppBar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />
        <div className="p-4 overflow-auto flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
