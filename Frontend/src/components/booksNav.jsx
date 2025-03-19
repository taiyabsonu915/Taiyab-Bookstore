import React, { useEffect, useState } from 'react'

function BooksNav() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://www.googleapis.com/books/v1/volumes?q=subject:Mathematics&maxResults=40&startIndex=0"
        );
        const data = await response.json();

        if (data.items) {
          // Extract unique categories
          const uniqueCategories = new Set();
          data.items.forEach((item) => {
            if (item.volumeInfo.categories) {
              item.volumeInfo.categories.forEach((category) =>
                uniqueCategories.add(category)
              );
            }
          });
          setCategories(Array.from(uniqueCategories));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBooks();
  }, []);


  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  return (
    <>
<div className={` max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-800 dark:text-white fixed top-[13%] left-0 right-0 z-50 rounded-md hidden md:block ${
          sticky
            ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-700 dark:text-white duration-300 transition-all ease-in-out"
            : ""
        }`}>
  <ul className="menu menu-horizontal">
        <div
          className="ml-5 mt-2 cursor-pointer hover:bg-slate-600 py-2 px-2 rounded-lg"
        >
          <a href="/course"><li className="pl-1">All</li></a>
          
        </div>
        <div
          className="ml-5 mt-2 cursor-pointer hover:bg-slate-600 py-2 px-2 rounded-lg"
        >
          <a href="/course/mathemetics"><li className="pl-1">Mathematics</li></a>
          
        </div>
        <div
          className="ml-5 mt-2 cursor-pointer hover:bg-slate-600 py-2 px-2 rounded-lg"
        >
          <a href="/course/Science"><li className="pl-1">Science</li></a>
          
        </div>
        <div
          className="ml-5 mt-2 cursor-pointer hover:bg-slate-600 py-2 px-2 rounded-lg"
        >
          <a href="/course/Art"> <li className="pl-1">Art</li></a>
         
        </div>
        <div
          className="ml-5 mt-2 cursor-pointer hover:bg-slate-600 py-2 px-2 rounded-lg"
        >
          <a href="/course/Computers"><li className="pl-1">Computers</li></a>
          
        </div>
        <div
          className="ml-5 mt-2 cursor-pointer hover:bg-slate-600 py-2 px-2 rounded-lg"
        >
          <a href="/course/Comics"><li className="pl-1">Comics & Graphic Novels</li></a>
          
        </div>
        <div
          className="ml-5 mt-2 cursor-pointer hover:bg-slate-600 py-2 px-2 rounded-lg"
        >
          <a href="/course/Social Science">
          <li className="pl-1">Social Science</li></a>
        </div>
        <div
          className="ml-5 mt-2 cursor-pointer hover:bg-slate-600 py-2 px-2 rounded-lg">
            <a href="/course/Bayesian statistical decision theory">
            <li className="pl-1">statistical decision theory</li></a>

          </div>

  </ul>
</div>

</>
  )
}




export default BooksNav
