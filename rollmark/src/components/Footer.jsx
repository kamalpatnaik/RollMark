import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600 text-sm">
        {/* Left section */}
        <div className="text-center ">
          <p>© {new Date().getFullYear()} Developed by INCOSS TECHNOLOGIES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
