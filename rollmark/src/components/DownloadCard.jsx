import React from 'react'

const DownloadCard = () => {
  return (
<div className="min-h-screen bg-gray-200 flex flex-col justify-center items-center py-20">
     <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
        Available Downloads
      </h1>

       <h2 className="text-3xl font-bold text-gray-700 mb-12 text-center">
        Student App
      </h2>
  <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-2 gap-24 space-y-4 md:space-y-0">
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg ">
      <div className="relative">
        <img className="w-full rounded-xl size-1.8" src="https://img.icons8.com/?size=1200&id=17836&format=jpg" alt="Colors" />
      </div>
      <h2 className="mt-4 text-gray-800 text-2xl font-bold ">Android Version </h2>
      <div className="my-4">
        <div className="flex space-x-1 items-center">
        
        </div>
        <button className="mt-4 text-xl w-full transform hover:scale-105 transition duration-500 text-white bg-indigo-600 py-2 rounded-xl shadow-lg cursor-pointer">Download</button>
      </div>
    </div>
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform ">
      
      <div className="relative">
        <img className="w-full size-0.7 rounded-xl items-center justify-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFa-ZEmjHFcQSx3HMDkP5_lziPQzDfvs_klQ&s" alt="Colors" />
      </div>
      <h2 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">IOS Version</h2>
      <div className="my-4">
        <div className="flex space-x-1 items-center">
        
        </div>
        <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 cursor-pointer">Download</button>
      </div>
    </div>
  </div>
  <br />
  <br />
  <br />
  <br />
  <h3 className="text-3xl font-bold text-gray-700 mb-12 text-center">
        Faculty App
      </h3>
  <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-2 gap-24 space-y-4 md:space-y-0">
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg ">
      <div className="relative">
        <img className="w-full rounded-xl" src="https://img.icons8.com/?size=1200&id=17836&format=jpg" alt="Colors" />
      </div>
      <h2 className="mt-4 text-gray-800 text-2xl font-bold ">Android Version</h2>
      <div className="my-4">
        <div className="flex space-x-1 items-center">
        
        </div>
        <button className="mt-4 text-xl w-full transform hover:scale-105 transition duration-500 text-white bg-indigo-600 py-2 rounded-xl shadow-lg cursor-pointer">Download</button>
      </div>
    </div>
    <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform ">
      
      <div className="relative">
        <img  className="w-full rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFa-ZEmjHFcQSx3HMDkP5_lziPQzDfvs_klQ&s" alt="Colors" />
      </div>
      <h2 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">IOS Version</h2>
      <div className="my-4">
        <div className="flex space-x-1 items-center">
        
        </div>
        <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 cursor-pointer">Download</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default DownloadCard