import Link from 'next/link'
const MainPage = () => {
  return (
    <div>
    <div className='relative pt-1 grid sm:grid-cols-1 md:grid-cols-3 gap-y-2 md:ml-36'>
      <div className='break-words bg-pink-300 border-solid border-black border-4 hover:border-dotted w-52 rounded-lg h-52'>
        <p className='m-2 font-bold bg-red-500 w-16 text-center rounded-md'>Python</p>
        <p className='relative left-8 font-bold bg-red-500 w-28 text-center rounded-md mt-2'>Frameworks</p>
        <ul className="relative list-disc flex flex-col ml-16">
          <li>Django</li>
          <li>Django Rest Framework</li>
          <li>FastAPI</li>
        </ul>
      </div>
      <div className='break-words border-solid bg-pink-300 border-black border-4 hover:border-dotted w-52 rounded-lg h-52'>
        <p className='m-2 font-bold bg-red-500 w-24 text-center rounded-md'>JavaScript</p>
        <p className='relative left-8 font-bold bg-red-500 w-32 text-center rounded-md mt-2'>Lib/Frameworks</p>
        <ul className="relative list-disc flex flex-col ml-16">
          <li>React Js</li>
          <li>Next Js</li>
        </ul>
      </div>

      <div className='break-words bg-pink-300 border-solid border-black border-4 hover:border-dotted w-52 rounded-lg h-52'>
        <p className='m-2 font-bold bg-red-500 w-16 text-center rounded-md'>DevOps</p>
        <p className='relative left-8 font-bold bg-red-500 w-16 text-center rounded-md mt-2'>Tech</p>
        <ul className="relative list-disc flex flex-col ml-16">
          <li>Docker</li>
          <li>Jenkins CI/CD</li>
        </ul>
      </div>
    
    </div>
    <div className='grid justify-center w-screen'>
    <div className='my-2 rounded-md bg-blue-300 text-center w-20 hover:bg-orange-300'><Link href="/">Home</Link></div>
    </div>
    </div>
  )
}

export default MainPage;