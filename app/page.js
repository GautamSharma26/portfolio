import React from 'react';
import Link from 'next/link';

const RootPageMainD = () => {
  return (
    <div className='h-[calc(100vh-144px)] overflow-hidden overflow-y-auto bg-gray-100'>
      <div className="flex flex-col items-center justify-center py-6">
        {/* Personal Introduction Section */}
        <div className="flex-shrink-0 flex flex-col items-center justify-center bg-slate-400 rounded-lg w-72 md:w-80 lg:w-96 p-6 shadow-lg text-white mb-6">
          <img
            src="/static/images/20230114_165730.jpg"
            alt="Profile Picture"
            className="rounded-full w-24 h-24 md:w-32 md:h-32"
          />
          <h1 className="text-lg md:text-xl font-bold mt-4">Gautam Sharma</h1>
          <p className="text-center text-sm md:text-base mt-2">
            Hi, I'm Gautam, a passionate web developer with a love for creating dynamic and user-friendly websites.
          </p>
        </div>

        {/* Container for grid content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full max-w-4xl p-6">
          <Link href="/main">
            <div className="text-sm flex flex-col items-center justify-center bg-yellow-400 rounded-lg p-6 hover:bg-yellow-500 focus:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mb-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.121 7.464l1.415 1.414L12 6.828l-1.414-1.415-3.536 3.536zM10 18a1 1 0 100-2 1 1 0 000 2zM2 3a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1h-3v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3H3a1 1 0 01-1-1V3zm2 1v8h12V4H4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Skills</span>
            </div>
          </Link>
          <Link href="/exp">
            <div className="text-sm flex flex-col items-center justify-center bg-red-400 rounded-lg p-6 hover:bg-red-500 focus:bg-red-500 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mb-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a1 1 0 100-2 1 1 0 000 2zM2 3a1 1 0 011-1h14a1 1 0 011 1v13a1 1 0 01-1 1h-4a1 1 0 01-1-1v-1H7v1a1 1 0 01-1 1H2a1 1 0 01-1-1V3zm8 7a1 1 0 011 1v3a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h2zm2-6H4v10h8V4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Experience</span>
            </div>
          </Link>
          <Link href="/blogs">
            <div className="text-sm flex flex-col items-center justify-center bg-orange-400 rounded-lg p-6 hover:bg-orange-500 focus:bg-orange-500 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mb-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a1 1 0 100-2 1 1 0 000 2zM2 3a1 1 0 011-1h14a1 1 0 011 1v1h-2a1 1 0 01-1-1V4H4v13h5a1 1 0 011 1h5v-1a1 1 0 01-1-1H3V3zm7 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">My Blogs</span>
            </div>
          </Link>
          <Link href="/project">
            <div className="text-sm flex flex-col items-center justify-center bg-blue-400 rounded-lg p-6 hover:bg-blue-500 focus:bg-blue-500 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mb-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a1 1 0 100-2 1 1 0 000 2zM2 3a1 1 0 011-1h14a1 1 0 011 1v1H2V3zm5 11a1 1 0 100-2 1 1 0 000 2zM4 7h12v1H4V7z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Projects</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RootPageMainD;
