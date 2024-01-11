import Link from 'next/link'
const MainPage = () => {
  return (
    <div className='pt-1'>
      <div className='bg-slate-400 border-solid border-black border-4 hover:border-dotted w-screen rounded-lg h-32'>
        <p className='m-2 font-bold bg-red-500 w-16 text-center rounded-md'>Python</p>
        <p className='relative left-8 font-bold bg-red-500 w-28 text-center rounded-md mt-2'>Frameworks</p>
        <ul className="absolute list-disc flex flex-row left-16 space-x-8">
          <li>Django</li>
          <li>Django Rest Framework</li>
          <li>FastAPI</li>
        </ul>
      </div>
      <div className='border-solid bg-slate-400 border-black border-4 hover:border-dotted w-screen rounded-lg h-32'>
        <p className='m-2 font-bold bg-red-500 w-24 text-center rounded-md'>JavaScript</p>
        <p className='relative left-8 font-bold bg-red-500 w-32 text-center rounded-md mt-2'>Lib/Frameworks</p>
        <ul className="absolute list-disc flex flex-row left-16 space-x-8">
          <li>React Js</li>
          <li>Next Js</li>
        </ul>
      </div>

      <div className='bg-slate-400 border-solid border-black border-4 hover:border-dotted w-screen rounded-lg h-32'>
        <p className='m-2 font-bold bg-red-500 w-16 text-center rounded-md'>DevOps</p>
        <p className='relative left-8 font-bold bg-red-500 w-16 text-center rounded-md mt-2'>Tech</p>
        <ul className="absolute list-disc flex flex-row left-16 space-x-8">
          <li>Docker</li>
          <li>Jenkins CI/CD</li>
        </ul>
      </div>

    </div>
  )
}

export default MainPage;