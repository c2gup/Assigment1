import React from 'react'
import { Link } from 'react-router-dom';

function Display() {
  return (
    <div  >
   


    <div className="flex flex-col justify-center items-center mt-[20%] space-y-2 md:flex-row md:space-x-2 md:space-y-0">
     <Link to='Buttons'>
     
     
     <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Buttons 
      </button>
     
     </Link>
     

     <Link to="/Desktop">
     
     
     <button
        type="button"
        className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
      >
        Desktop
      </button>
     
     </Link>
     <Link to="/Home">
     <button
        type="button"
        className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
       Home
      </button>
     
     </Link>
     
    </div>


    </div>
  )
}

export default Display
