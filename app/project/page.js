import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Section Title with Animation */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900 animate-bounce">Projects Highlight</h1>

      {/* First Project with Graphics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg border-2 border-gray-300 p-4 md:p-8 shadow-lg">
        {/* Project Image with Graphic */}
        <div className="relative h-48 md:h-auto overflow-hidden rounded-lg">
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="bg-white p-4 rounded-full transform rotate-45 shadow-md">
              <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <Image src="/static/images/Pizza On Your Way.png" alt="Pizza Delivery" layout="fill" objectFit="cover" className="rounded-lg" />
        </div>

        {/* Project Details */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Pizza Delivery</h2>
          <p className="text-gray-700 mb-4">
            This project is based on Pizza deleivery as per User order. In this project I have used Django channels for real time data updation in database with the help of Django signals. I have also used Celery into this for running background task. I have also worked on Frontend side of this project. Fronted is developed using Reat js.
          </p>
          <div className="text-gray-700">
            <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
            <ul className="list-disc pl-6 mb-0">
              <li>DRF</li>
              <li>React js</li>
              <li>Celery</li>
              <li>Channels</li>
              <li>Redis</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Second Project with Graphics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg border-2 border-gray-300 p-4 md:p-8 shadow-lg mt-8">
        {/* Project Image with Graphic */}
        <div className="relative h-48 md:h-auto overflow-hidden rounded-lg">
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="bg-white p-4 rounded-full transform rotate-45 shadow-md">
              <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <Image src="/static/images/portal1.jpg" alt="Portal Management" layout="fill" objectFit="cover" className="rounded-lg" />
        </div>

        {/* Project Details */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Portal Management</h2>
          <p className="text-gray-700 mb-4">
            This project is used for Portal Management. In this project I have used celery for running background task and scheduled task.I have mostly worked on authentication, time entry and calendar module.I have also explore myself in Django Permission in this project.
          </p>
          <div className="text-gray-700">
            <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
            <ul className="list-disc pl-6 mb-0">
              <li>DRF</li>
              <li>Celery</li>
              <li>Postgres</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
