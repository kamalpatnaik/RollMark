import React from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const AppBar = ({ sideBarOpen, setSideBarOpen }) => {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Download', path: '/download' },
    { name: 'Documentation', path: '/documentation' },
    { name: 'Developers', path: '/developers' },
  ]

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-white shadow-md z-50">
      {/* Left: Mobile Menu Button */}
      <div className="flex items-center md:hidden">
        <button
          onClick={() => setSideBarOpen(!sideBarOpen)}
          className="p-2 hover:bg-gray-100 rounded-md"
        >
          {sideBarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Center: Menu (Desktop) */}
      <nav className="hidden md:flex items-center gap-14 text-lg font-semibold text-gray-700">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="hover:text-indigo-600 transition-colors duration-200"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Right: Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img src="/logo192.png" alt="App Logo" className="w-10 h-10" />
        </Link>
      </div>
    </header>
  )
}

export default AppBar
