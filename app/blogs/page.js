import React from 'react'
import Link from 'next/link'

const Page = () => {
  return (
    <div>
      <h1 class="text-5xl text-white font-bold mb-8 animate-pulse">
        Coming Soon
      </h1>
      <p class="text-white text-lg mb-8">
        We're working hard to bring you something amazing. Stay tuned!!
      </p>
      <div className="flex justify-center mt-20">
        <Link href="/">
          <button className="bg-blue-300 hover:bg-orange-300 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">
            Home
          </button>
        </Link>
      </div>
    </div>
  )
}
export default Page