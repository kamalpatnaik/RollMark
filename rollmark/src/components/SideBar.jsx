import { Link } from 'react-router-dom'
import { X } from 'lucide-react'

const SideBar = ({ sideBarOpen, setSideBarOpen }) => {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Download', path: '/download' },
    { name: 'Documentation', path: '/documentation' },
    { name: 'Developers', path: '/developers' },
  ]

  return (
    <div
      className={`w-60 bg-white border-r border-gray-200 flex flex-col fixed top-0 bottom-0 left-0 z-50
      transform transition-all duration-300 ease-in-out
      ${sideBarOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
      
      <div className="flex justify-end p-4 md:hidden">
        <button
          onClick={() => setSideBarOpen(false)}
          className="p-2 hover:bg-gray-100 rounded-md">
          <X size={24} />
        </button>
      </div>

      {/* Menu Links */}
      <nav className="flex flex-col gap-4 px-6 mt-4 font-medium text-gray-700">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="hover:text-indigo-600 transition-colors duration-200"
            onClick={() => setSideBarOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default SideBar