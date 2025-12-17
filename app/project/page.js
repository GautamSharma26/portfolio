import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex flex-col items-center py-10 px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 drop-shadow-lg">Projects Highlight</h1>

            <div className="container-centered grid grid-cols-1 gap-10 max-w-5xl">
                {/* First Project Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 card-base">
                    <div className="relative h-56 md:h-72 overflow-hidden rounded-xl flex items-center justify-center">
                        <Image src="/static/images/Pizza On Your Way.png" alt="Pizza Delivery" width={640} height={420} className="rounded-xl object-cover" />
                    </div>
                    <div className="flex flex-col justify-center px-2">
                        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-blue-700">Pizza Delivery</h2>
                        <p className="text-gray-700 mb-4 text-base md:text-lg">This project is based on Pizza delivery as per user order. It uses Django Channels for real-time database updates, Celery for background tasks, and a React.js frontend.</p>
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

                {/* Second Project Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 card-base">
                    <div className="relative h-56 md:h-72 overflow-hidden rounded-xl flex items-center justify-center">
                        <Image src="/static/images/portal1.jpg" alt="Portal Management" width={640} height={420} className="rounded-xl object-cover" />
                    </div>
                    <div className="flex flex-col justify-center px-2">
                        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-purple-700">Portal Management</h2>
                        <p className="text-gray-700 mb-4 text-base md:text-lg">This project is used for portal management. It uses Celery for background and scheduled tasks, and includes modules for authentication, time entry, calendar, and Django permissions.</p>
                        <div className="text-gray-700">
                            <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
                            <ul className="list-disc pl-6 mb-0">
                                <li>DRF</li>
                                <li>Celery</li>
                                <li>Postgres</li>
                                <li>EC2</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Third Project Card */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 card-base">
                    <div className="relative h-56 md:h-72 overflow-hidden rounded-xl flex items-center justify-center">
                        <Image src="/static/images/patrick-hendry-w5SgojGZooI-unsplash.jpg" alt="Yoga Posture Detection" width={640} height={420} className="rounded-xl object-cover" />
                    </div>
                    <div className="flex flex-col justify-center px-2">
                        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-pink-700">Yoga Posture Detection</h2>
                        <p className="text-gray-700 mb-4 text-base md:text-lg">This project utilizes YOLO and MediaPipe for yoga pose detection, a custom dataset from Roboflow, and a Large Language Model for correction, to provide real-time feedback on yoga pose alignment.</p>
                        <div className="text-gray-700">
                            <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
                            <ul className="list-disc pl-6 mb-0">
                                <li>Streamlit</li>
                                <li>LLM</li>
                                <li>YOLO model</li>
                                <li>Mediapipe</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center w-full mt-6">
                    <Link href="/">
                        <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-105 cursor-pointer text-center">Home</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}