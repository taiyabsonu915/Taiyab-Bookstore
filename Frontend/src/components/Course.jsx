import React, { useEffect, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
import Books from "./books";
import MobBooksNav from "./mobBooksNav";
import BooksNav from "./booksNav";

function Course() {
  const [isOpen, setIsOpen] = useState(false);
  const [book, setBook] = useState([]);
  const [delivery, setDelivery] = useState(() => JSON.parse(localStorage.getItem("delivery")) || []);

  const addToDelivery = (book) => {
     const updatedDelivery = [...delivery, book];
     setDelivery(updatedDelivery);
     localStorage.setItem("delivery", JSON.stringify(updatedDelivery));
   };

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstorebackend-2ur2.onrender.com/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
     <h1 className="font-semibold text-xl pb-2 mt-[12%] ml-5 ">Free Offered Courses</h1>
        <p className="text-gray-600 ml-5">
          Discover free courses to enhance your skills. Start learning today!
        </p>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10 ">

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
       
         
          
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        
        </div>
        <Books></Books>

      </div>
    </>
  );
}

export default Course;
