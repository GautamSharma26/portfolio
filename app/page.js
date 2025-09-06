import React from 'react';
import Link from 'next/link';

const RootPageMainD = () => {
  return (
  <div className='h-[calc(100vh-144px)] overflow-hidden overflow-y-auto bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 font-sans'>
  <div className="flex flex-col items-center justify-center py-10">
        {/* Personal Introduction Section */}
        <div className="flex-shrink-0 flex flex-col items-center justify-center bg-white/90 rounded-xl w-80 md:w-96 lg:w-[28rem] p-8 shadow-2xl border border-gray-200 mb-10">
          <img
            src="/static/images/20230114_165730.jpg"
            alt="Profile Picture"
            className="rounded-full w-28 h-28 md:w-36 md:h-36 shadow-lg border-4 border-gray-200"
          />
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 mt-5">Gautam Sharma</h1>
          <span className="text-base md:text-lg text-gray-500 mt-1 font-medium">Python/AI Developer</span>
          <p className="text-center text-gray-600 text-sm md:text-base mt-3">
            Hi, I'm Gautam, a passionate Python/AI developer. Working on innovative solutions and exploring the latest in technology to create impactful applications. 
          </p>
        </div>

        {/* Container for grid content */}
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 w-full max-w-4xl px-4 py-2">
          <Link href="/main">
            <div className="flex flex-col items-center justify-center bg-yellow-100 rounded-xl p-7 shadow-md hover:shadow-xl border border-yellow-200 hover:bg-yellow-200 transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-yellow-500 mb-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.121 7.464l1.415 1.414L12 6.828l-1.414-1.415-3.536 3.536zM10 18a1 1 0 100-2 1 1 0 000 2zM2 3a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1h-3v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3H3a1 1 0 01-1-1V3zm2 1v8h12V4H4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-lg text-gray-700">Skills</span>
            </div>
          </Link>
          <Link href="/exp">
            <div className="flex flex-col items-center justify-center bg-red-100 rounded-xl p-7 shadow-md hover:shadow-xl border border-red-200 hover:bg-red-200 transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-500 mb-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a1 1 0 100-2 1 1 0 000 2zM2 3a1 1 0 011-1h14a1 1 0 011 1v13a1 1 0 01-1 1h-4a1 1 0 01-1-1v-1H7v1a1 1 0 01-1 1H2a1 1 0 01-1-1V3zm8 7a1 1 0 011 1v3a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h2zm2-6H4v10h8V4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-lg text-gray-700">Experience</span>
            </div>
          </Link>
          <Link href="/blogs">
            <div className="flex flex-col items-center justify-center bg-orange-100 rounded-xl p-7 shadow-md hover:shadow-xl border border-orange-200 hover:bg-orange-200 transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-orange-500 mb-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a1 1 0 100-2 1 1 0 000 2zM2 3a1 1 0 011-1h14a1 1 0 011 1v1h-2a1 1 0 01-1-1V4H4v13h5a1 1 0 011 1h5v-1a1 1 0 01-1-1H3V3zm7 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-lg text-gray-700">My Blogs</span>
            </div>
          </Link>
          <Link href="/project">
            <div className="flex flex-col items-center justify-center bg-blue-100 rounded-xl p-7 shadow-md hover:shadow-xl border border-blue-200 hover:bg-blue-200 transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-500 mb-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a1 1 0 100-2 1 1 0 000 2zM2 3a1 1 0 011-1h14a1 1 0 011 1v1H2V3zm5 11a1 1 0 100-2 1 1 0 000 2zM4 7h12v1H4V7z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-lg text-gray-700">Projects</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RootPageMainD;
