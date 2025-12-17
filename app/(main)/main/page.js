import Link from 'next/link';

export default function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-blue-100 px-4 py-10">
            <div className="container-centered grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
                {/* Python Section */}
                <div className="card-base flex flex-col items-center text-center">
                    <div className="mb-3 text-purple-500">
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' />
                        </svg>
                    </div>
                    <h3 className="font-extrabold text-xl text-purple-700">Python</h3>
                    <p className="text-sm text-purple-400 mb-3">Frameworks</p>
                    <ul className="list-disc ml-6 mt-2 text-gray-700 text-left">
                        <li>Django</li>
                        <li>Django Rest Framework</li>
                        <li>FastAPI</li>
                    </ul>
                </div>

                {/* JavaScript Section */}
                <div className="card-base flex flex-col items-center text-center">
                    <div className="mb-3 text-yellow-500">
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 7a4 4 0 01-8 0' />
                        </svg>
                    </div>
                    <h3 className="font-extrabold text-xl text-yellow-700">JavaScript</h3>
                    <p className="text-sm text-yellow-400 mb-3">Lib / Frameworks</p>
                    <ul className="list-disc ml-6 mt-2 text-gray-700 text-left">
                        <li>React Js</li>
                        <li>Next Js</li>
                    </ul>
                </div>

                {/* DevOps Section */}
                <div className="card-base flex flex-col items-center text-center">
                    <div className="mb-3 text-blue-500">
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 10h1l2 7h13l2-7h1' />
                        </svg>
                    </div>
                    <h3 className="font-extrabold text-xl text-blue-700">DevOps</h3>
                    <p className="text-sm text-blue-400 mb-3">Tech Stack</p>
                    <ul className="list-disc ml-6 mt-2 text-gray-700 text-left">
                        <li>Docker</li>
                        <li>Jenkins CI / CD</li>
                        <li>EC2 / S3 / Lambda</li>
                    </ul>
                </div>

                {/* AI Section */}
                <div className="card-base flex flex-col items-center text-center">
                    <div className="mb-3 text-pink-500">
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8c-1.657 0-3 1.343-3 3' />
                        </svg>
                    </div>
                    <h3 className="font-extrabold text-xl text-pink-700">AI / ML</h3>
                    <ul className="list-disc ml-6 mt-2 text-gray-700 text-left">
                        <li>LLM</li>
                        <li>GenAI</li>
                        <li>VisionAI</li>
                    </ul>
                </div>
            </div>

            <div className="flex justify-center mt-12">
                <Link href="/">
                    <button className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-105">
                        Home
                    </button>
                </Link>
            </div>
        </div>
    );
}