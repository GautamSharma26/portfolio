import Link from 'next/link'
const MainPage = () => {
  return (
    <div>
      <div className='border-solid border-indigo-600 border-4 hover:border-dotted w-screen rounded-lg h-32'>
        <p className='font-bold bg-red-500 w-16 text-center rounded-md'>Python</p>
        <p className='relative left-8 font-bold bg-red-500 w-28 text-center rounded-md mt-2'>Frameworks</p>
        <ul className="absolute list-disc flex flex-row left-16 space-x-8">
          <li>Django</li>
          <li>Django Rest Framework</li>
          <li>FastAPI</li>
        </ul>
      </div>

    </div>
  )
}

export default MainPage;