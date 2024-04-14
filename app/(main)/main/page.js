import Link from 'next/link';

const MainPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Python Section */}
        <div className="bg-pink-300 border-black border-4 rounded-lg p-4 hover:border-dotted transition duration-300 ease-in-out">
          <p className="font-bold text-red-500 text-center mb-2">Python</p>
          <p className="font-bold text-red-500 text-center">Frameworks</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Django</li>
            <li>Django Rest Framework</li>
            <li>FastAPI</li>
          </ul>
        </div>

        {/* JavaScript Section */}
        <div className="bg-pink-300 border-black border-4 rounded-lg p-4 hover:border-dotted transition duration-300 ease-in-out">
          <p className="font-bold text-red-500 text-center mb-2">JavaScript</p>
          <p className="font-bold text-red-500 text-center">Lib/Frameworks</p>
          <ul className="list-disc ml-6 mt-2">
            <li>React Js</li>
            <li>Next Js</li>
          </ul>
        </div>

        {/* DevOps Section */}
        <div className="bg-pink-300 border-black border-4 rounded-lg p-4 hover:border-dotted transition duration-300 ease-in-out">
          <p className="font-bold text-red-500 text-center mb-2">DevOps</p>
          <p className="font-bold text-red-500 text-center">Tech</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Docker</li>
            <li>Jenkins CI/CD</li>
          </ul>
        </div>
      </div>

      {/* Home Button */}
      <div className="flex justify-center mt-8">
        <Link href="/">
          <button className="bg-blue-300 hover:bg-orange-300 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
