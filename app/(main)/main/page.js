import Link from 'next/link';


export default function Page() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-blue-100 px-4 py-10 flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
                {/* Python Section */}
                <div className="backdrop-blur-lg bg-white/70 rounded-2xl shadow-xl p-7 flex flex-col items-center border border-purple-200 hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
                    <span className="mb-3 text-purple-500">
                        <svg xmlns='http://www.w3.org/2000/svg'
                            className='h-8 w-8'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M12 4v16m8-8H4'
                            />
                        </svg>
                    </span>
                    <p className="font-extrabold text-xl text-purple-700 text-center mb-1"> Python </p>
                    <p className="font-semibold text-purple-400 text-center mb-2"> Frameworks </p>
                    <ul className="list-disc ml-6 mt-2 text-gray-700">
                        <li> Django </li>
                        <li> Django Rest Framework </li>
                        <li> FastAPI </li>
                    </ul>
                </div> { /* JavaScript Section */ } <
                div className = "backdrop-blur-lg bg-white/70 rounded-2xl shadow-xl p-7 flex flex-col items-center border border-yellow-200 hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out" >
                    <span className="mb-3 text-yellow-500">
                        <svg xmlns='http://www.w3.org/2000/svg'
                            className='h-8 w-8'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'>
                            <path strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M16 7a4 4 0 01-8 0m8 0a4 4 0 01-8 0m8 0V5a4 4 0 00-8 0v2m8 0v2a4 4 0 01-8 0V7' />
                        </svg>
                    </span>
                    <p className="font-extrabold text-xl text-yellow-700 text-center mb-1"> JavaScript </p>
                    <p className="font-semibold text-yellow-400 text-center mb-2"> Lib / Frameworks </p>
                    <ul className="list-disc ml-6 mt-2 text-gray-700">
                        <li> React Js </li>
                        <li> Next Js </li>
                    </ul>
                </div> { /* DevOps Section */ } <div className = "backdrop-blur-lg bg-white/70 rounded-2xl shadow-xl p-7 flex flex-col items-center border border-blue-200 hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out" >
        <span className = "mb-3 text-blue-500" >
        <svg xmlns = 'http://www.w3.org/2000/svg'
        className = 'h-8 w-8'
        fill = 'none'
        viewBox = '0 0 24 24'
        stroke = 'currentColor' > < path strokeLinecap = 'round'
        strokeLinejoin = 'round'
        strokeWidth = { 2 }
        d = 'M3 10h1l2 7h13l2-7h1' /> </svg> </span> <p className = "font-extrabold text-xl text-blue-700 text-center mb-1" > DevOps </p>
        <p className = "font-semibold text-blue-400 text-center mb-2" > Tech Stack </p>
        <ul className = "list-disc ml-6 mt-2 text-gray-700" >
        <li > Docker </li>
        <li > Jenkins CI / CD </li>
        <li > EC2 / S3 / lambda </li>
        </ul> </div> { /* AI Section */ } <div className = "backdrop-blur-lg bg-white/70 rounded-2xl shadow-xl p-7 flex flex-col items-center border border-pink-200 hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out">
        <span className = "mb-3 text-pink-500">
        <svg xmlns = 'http://www.w3.org/2000/svg'
        className = 'h-8 w-8'
        fill = 'none'
        viewBox = '0 0 24 24'
        stroke = 'currentColor' > <path strokeLinecap = 'round'
        strokeLinejoin = 'round'
        strokeWidth = { 2 }
        d = 'M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 0C7.582 4 4 7.582 4 12c0 4.418 3.582 8 8 8s8-3.582 8-8c0-4.418-3.582-8-8-8z'/> </svg> </span> <p className = "font-extrabold text-xl text-pink-700 text-center mb-1" > AI / ML </p> <ul className = "list-disc ml-6 mt-2 text-gray-700" >
        <li > LLM </li>
        <li > GenAI </li>
        <li > VisionAI </li>
        </ul> </div> </div> { /* Home Button */ } <div className = "flex justify-center mt-12" >
        <Link href = "/" >
        <button className = "bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 hover:from-pink-400 hover:to-purple-400 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out hover:scale-105" >
        Home
        </button>
        </Link>
        </div>
        </div>
        
    );
}