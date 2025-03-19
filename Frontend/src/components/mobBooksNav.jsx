import React, { useState } from 'react'
import { IoIosArrowDropdown } from 'react-icons/io'
import { Link } from 'react-router-dom';

function MobBooksNav() {
  
  const [isOpen, setIsOpen] = useState(false);
  const [book, setBook] = useState([]);
  return (
    <>
            <div className="md:mt-5 mt-8  rounded-lg flex flex-col items-center text-center ">
          
          <div className="fixed z-30   w-full md:w-1/2 mb-6">
          <div className="md:hidden ">
          <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 text-white rounded-md"
      >
        <div className="flex flex-row text-green-900 bg-black rounded p-1">
        Category<IoIosArrowDropdown className=" text-2xl text-blue-900" ></IoIosArrowDropdown>
        </div>
     
      </button>
      {/* className="px-4 py-2 hover:bg-gray-400 cursor-pointer bg-slate-950 rounded-xl mt-2  " */}
      {isOpen && (
        <div className=" my_model_2  w-48 absolute  bg-gray-700 border rounded-md shadow-lg">
            <Link
              to="/course"
              className=" btn-ghost absolute right-0 h-1 bg-slate-700 hover:bg-gray-400"
              onClick={() => document.getElementById("my_modal_2").close()}
            >
              ✕
            </Link>
          <ul className="py-3   ">
          <div>
          <a href="/course/mathemetics"><li className="px-4 py-2 hover:bg-gray-400 cursor-pointer bg-slate-950 rounded-xl mt-2 ">Mathematics</li></a>
          
        </div>
        <div>
          <a href="/course/Science"><li className="px-4 py-2 hover:bg-gray-400 cursor-pointer bg-slate-950 rounded-xl mt-2 ">Science</li></a>
          
        </div>
        <div>
          <a href="/course/Art"> <li className="px-4 py-2 hover:bg-gray-400 cursor-pointer bg-slate-950 rounded-xl mt-2 ">Art</li></a>
         
        </div>
        <div>
          <a href="/course/Computers"><li className="px-4 py-2 hover:bg-gray-400 cursor-pointer bg-slate-950 rounded-xl mt-2 ">Computers</li></a>
          
        </div>
        <div>
          <a href="/course/Comics"><li  className="px-4 py-2 hover:bg-gray-400 cursor-pointer bg-slate-950 rounded-xl mt-2 ">Comics & Graphic Novels</li></a>
          
        </div>
        <div
        >
          <a href="/course/Social Science">
          <li className="px-4 py-2 hover:bg-gray-400 cursor-pointer bg-slate-950 rounded-xl mt-2 ">Social Science</li></a>
        </div>
        <div>
            <a href="/course/Bayesian statistical decision theory">
            <li className="px-4 py-2 hover:bg-gray-400 cursor-pointer bg-slate-950 rounded-xl mt-2 ">statistical decision theory</li></a>

          </div>
          </ul>
        </div>
      )}
      </div>
            
           
          </div>
        </div>
    </>
  )
}

export default MobBooksNav
