import React from 'react';
import Button from '../Utails/Button'; 

function Allpages() {
  return (
    <div className="p-6  h-[370px] w-[320px] m-auto">
      {/* Card container */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 border-b flex justify-between border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800">All Pages</h2>
          <div className="inline-flex items-center">
              <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="page2">
                <input
                  type="checkbox"
                  className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-[#5087F8] checked:before:bg-[#5087F8] hover:before:opacity-10"
                  id="page2"
                  defaultChecked
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </span>
              </label>
            </div>
        </div>

        {/* Page sections */}
        <div className="p-6 space-y-4">
          {/* Page 1 */}
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm flex items-center">
            <div className="flex-1">
              <h3 className="text-xl font-medium text-gray-700">Page 1</h3>
            </div>

            {/* Checkbox */}
            <div className="inline-flex items-center">
              <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="page1">
                <input
                  type="checkbox"
                  className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-[#5087F8] checked:before:bg-[#5087F8] hover:before:opacity-10"
                  id="page1"
                  defaultChecked
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </span>
              </label>
            </div>
          </div>
          
          {/* Repeat for other pages */}
          {/* Page 2 */}
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm flex items-center">
            <div className="flex-1">
              <h3 className="text-xl font-medium text-gray-700">Page 2</h3>
            </div>

            {/* Checkbox */}
            <div className="inline-flex items-center">
              <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="page2">
                <input
                  type="checkbox"
                  className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-[#5087F8] checked:before:bg-[#5087F8] hover:before:opacity-10"
                  id="page2"
                  defaultChecked
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </span>
              </label>
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm flex items-center">
            <div className="flex-1">
              <h3 className="text-xl font-medium text-gray-700">Page 2</h3>
            </div>

            {/* Checkbox */}
            <div className="inline-flex items-center">
              <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="page2">
                <input
                  type="checkbox"
                  className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-[#5087F8] checked:before:bg-[#5087F8] hover:before:opacity-10"
                  id="page2"
                  defaultChecked
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </span>
              </label>
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm flex items-center">
            <div className="flex-1">
              <h3 className="text-xl font-medium text-gray-700">Page 2</h3>
            </div>

            {/* Checkbox */}
            <div className="inline-flex items-center">
              <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="page2">
                <input
                  type="checkbox"
                  className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-[#5087F8] checked:before:bg-[#5087F8] hover:before:opacity-10"
                  id="page2"
                  defaultChecked
                />
                <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </span>
              </label>
            </div>
          </div>
        </div>

        <Button variant="primary"  /> 
      </div>


    
    </div>
  );
}

export default Allpages;

