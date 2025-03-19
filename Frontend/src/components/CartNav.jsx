import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";
import Cart from "./Cart";
function CartNav() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Cart />
      </div>
      <Footer />
    </>
  );
}

export default CartNav;
