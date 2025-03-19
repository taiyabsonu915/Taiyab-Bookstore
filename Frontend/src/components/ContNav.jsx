import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";
import Contact from "./contact";
function ContNav() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default ContNav;
