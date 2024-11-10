
export default function Projects() {
    return (
      <div className="flex flex-col items-center py-12 bg-gray-900 text-white min-h-screen">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-8">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-white">Project 1</h2>
            <p className="text-gray-300 mt-2">This is a description of my first project. More details to come soon!</p>
          </div>
          
  
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-white">Project 2</h2>
            <p className="text-gray-300 mt-2">This is a description of my second project. More details to come soon!</p>
          </div>
        </div>
      </div>
    );
  }
  