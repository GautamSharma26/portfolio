import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <>
            <div className='grid text-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-2xl font-black'>Projects Highlight</div>
            <div className='grid grid-cols-1 p-2 m-2 rounded-md bg-gradient-to-tr from-gray-400 to-stone-400 border-black border-2'>
                <div className='grid text-center hover:scale-150 transition-all duration-500 cursor-pointer'>Pizza delivery</div>
                <div className='grid grid-cols-2 text-center mt-3 md:grid-cols-2 sm:grid-cols-2'>
                    <div className='grid bg-gradient-to-l from-gray-500 via-purple-500 to-orange-500 border-black border-2 rounded-lg'>
                        <h1 className='underline font-serif font-semibold'>Description</h1>
                        <p className='px-2'><em>
                            So I started to walk into the water. I won't lie to you boys, I was
                            terrified. But I pressed on, and as I made my way past the breakers
                            a strange calm came over me. I don't know if it was divine intervention
                            or the kinship of all living things but I tell you Jerry at that moment,
                            I was a marine biologist.</em>
                        </p>
                        <h1 className='underline font-serif font-semibold'>Tech Stack</h1>
                        <ul role="list" className="marker:text-purple-400 list-disc pl-6 text-black-500 text-start md:ml-36 sm:ml-36 ">
                            <li>5 cups chopped Porcini mushrooms</li>
                            <li>1/2 cup of olive oil</li>
                            <li>3lb of celery</li>
                        </ul>


                    </div>
                    <div className='bg-gradient-to-l from-orange-500 via-purple-500 to-gray-500 border-black border-2 rounded-lg relative h-auto'>
                        <Image src="/static/images/Pizza On Your Way.png" fill={true}></Image>
                    </div>
                </div>

            </div>
            <div className='grid grid-cols-1 p-2 m-2 rounded-md bg-gradient-to-tr from-gray-400 to-stone-400 border-black border-2'>
                <div className='grid text-center hover:scale-150 transition-all duration-500 cursor-pointer'>Portal Management</div>
                <div className='grid grid-cols-2 text-center mt-3 md:grid-cols-2 sm:grid-cols-2'>
                    <div className='grid bg-gradient-to-l from-gray-500 via-purple-500 to-orange-500 border-black border-2 rounded-lg'>
                        <h1 className='underline font-serif font-semibold'>Description</h1>
                        <p className='px-2'><em>
                            So I started to walk into the water. I won't lie to you boys, I was
                            terrified. But I pressed on, and as I made my way past the breakers
                            a strange calm came over me. I don't know if it was divine intervention
                            or the kinship of all living things but I tell you Jerry at that moment,
                            I was a marine biologist.</em>
                        </p>
                        <h1 className='underline font-serif font-semibold'>Tech Stack</h1>
                        <ul role="list" className="marker:text-purple-400 list-disc pl-6 text-black-500 text-start md:ml-36 sm:ml-36 ">
                            <li>5 cups chopped Porcini mushrooms</li>
                            <li>1/2 cup of olive oil</li>
                            <li>3lb of celery</li>
                        </ul>


                    </div>
                    <div className='bg-gradient-to-l from-orange-500 via-purple-500 to-gray-500 border-black border-2 rounded-lg relative h-auto'>
                        <Image src="/static/images/portal1.jpg" fill={true}></Image>
                    </div>
                </div>

            </div>
        </>
    )
}

export default page