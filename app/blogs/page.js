import React from 'react'
import Link from 'next/link'

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="card-base text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Coming Soon</h1>
        <p className="text-gray-700 text-lg mb-6">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        <div className="flex justify-center">
          <Link
            href="/"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-6 rounded-md shadow-md transition duration-300 ease-in-out hover:scale-105"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Page