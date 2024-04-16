import React from 'react';
import Link from 'next/link';

const RootPageMainD = () => {
  return (
    <div className="flex flex-col  items-center justify-center pt-9 bg-gray-300 h-[calc(100vh-144px)] overflow-hidden overflow-y-auto">
      {/* Welcome Section */}
      <div className="sticky top-0 bg-gradient-to-br from-green-400 to-green-600 rounded-full w-32 h-32 md:w-48 md:h-48 shadow-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center animate-pulse text-white font-bold text-2xl md:text-4xl">Welcome</div>
      </div>
      
      {/* Container for scrolling content */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col items-center space-y-6 p-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Link href="/main">
              <div className="flex flex-col items-center justify-center bg-yellow-400 rounded-lg p-6 hover:bg-yellow-500 focus:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white mb-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.121 7.464l1.415 1.414L12 6.828l-1.414-1.415-3.536 3.536zM10 18a1 1 0 100-2 1 1 0 000 2zM2 3a1 1 0 011-1h14a1 1 0 011 1v10a1 1 0 01-1 1h-3v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3H3a1 1 0 01-1-1V3zm2 1v8h12V4H4z" clipRule="evenodd" />
                </svg>
                Skills
              </div>
            </Link>
            <Link href="/exp">
              <div className="flex flex-col items-center justify-center bg-red-400 rounded-lg p-6 hover:bg-red-500 focus:bg-red-500 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white mb-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a1 1 0 100-2 1 1 0 000 2zM2 3a1 1 0 011-1h14a1 1 0 011 1v13a1 1 0 01-1 1h-4a1 1 0 01-1-1v-1H7v1a1 1 0 01-1 1H2a1 1 0 01-1-1V3zm8 7a1 1 0 011 1v3a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h2zm2-6H4v10h8V4z" clipRule="evenodd" />
                </svg>
                Experience
              </div>
            </Link>
            <Link href="/blogs">
              <div className="flex flex-col items-center justify-center bg-orange-400 rounded-lg p-6 hover:bg-orange-500 focus:bg-orange-500 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white mb-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a1 1 0 100-2 1 1 0 000 2zM2 3a1 1 0 011-1h14a1 1 0 011 1v1h-2a1 1 0 01-1-1V4H4v13h5a1 1 0 011 1h5v-1a1 1 0 01-1-1H3V3zm7 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                My Blogs
              </div>
            </Link>
            <Link href="/project">
              <div className="flex flex-col items-center justify-center bg-blue-400 rounded-lg p-6 hover:bg-blue-500 focus:bg-blue-500 transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white mb-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a1 1 0 100-2 1 1 0 000 2zM2 3a1 1 0 011-1h14a1 1 0 011 1v1H2V3zm5 11a1 1 0 100-2 1 1 0 000 2zM4 7h12v1H4V7z" clipRule="evenodd" />
                </svg>
                Projects
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootPageMainD;
