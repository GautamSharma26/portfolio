import Image from 'next/image'
import imgDefault from "../public/images/Default.jpg"

export default function Home() {
  return (
    <main className="grid md:grid-cols-3 sm:grid-cols-1 justify-center space-y-2 bg-slate-400 h-dvh p-12">
      <div className='md:w-48 md:h-48 sm:w-12 sm:h-12 min-[200px]:h-16 bg-yellow-600 rounded-md hover:rounded-full relative'>
        <div className='absolute md:h-48 sm:h-12 min-[200px]:h-16'>
          <Image src={imgDefault} className='md:h-48 sm:h-24 min-[200px]:h-16'/>
        </div>
      </div>
      <div className='md:w-48 md:h-48 bg-orange-900'>Second</div>
      <div className='md:w-48 md:h-48 bg-green-900'>Second2</div>
    </main>
  );
}
