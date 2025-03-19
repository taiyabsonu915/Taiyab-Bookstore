import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";
import BooksNav from "../components/booksNav";
import Search from "../components/search/searchBar";
import MobBooksNav from "../components/mobBooksNav";
function Courses() {
  return (
    <>
      <Navbar />
      <BooksNav className="fixed " />
      <div className=" min-h-screen ">
        <MobBooksNav className="md:hidden"></MobBooksNav>
      <Search></Search>
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
