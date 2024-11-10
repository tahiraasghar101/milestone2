import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center text-center bg-gray-900 text-white min-h-screen py-12 px-4">
      
        <h1 className="text-3xl md:text-4xl font-bold text-red-500 mb-4">Welcome to My Portfolio</h1>
        
        
        <div className="text-center mb-8 max-w-md px-4">
          <h2 className="text-xl md:text-2xl font-semibold text-red-300">Tahira Asghar</h2>
          <p className="mt-4 text-sm md:text-base text-gray-300">
            I'm an aspiring front-end developer focused on building responsive and user-friendly web experiences.
          </p>
        </div>

       
        <ul className="flex flex-col md:flex-row gap-5 mb-8 font-semibold text-lg">
          <li>
            <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">
              <Link href="/about">About</Link>
            </button>
          </li>
          <li>
            <button className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">
              <Link href="/contact">Contact</Link>
            </button>
          </li>
        </ul>

        
        <div className="mt-10">
          <img src="download.jpeg"alt="profile picture" width="250" height="250"
            className="rounded-full border-4 border-red-300 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56"
          />
        </div>

        <button className="bg-green-500 text-white mt-8 px-6 py-3 rounded-full hover:bg-green-600">
          <Link href="/component">View My Work</Link>
        </button>
      </div>
    </>
  );
}

