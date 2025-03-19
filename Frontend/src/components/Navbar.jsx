 import React, { useEffect } from "react";
 import { TbLogin } from "react-icons/tb";
 import { AiOutlineLogin } from "react-icons/ai";
import { CiDeliveryTruck } from "react-icons/ci";
import { useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

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
  const navItems = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/course">Course</a>
      </li>
      <li>
        <a href="/contact"  >Contact</a>
      </li>
    </>
  );
  return (
    <>
      <div
        className={` max-w-screen-2xl container mx-auto md:px-20 px-0 dark:bg-slate-800 dark:text-white fixed top-0 left-0 right-0 z-50 ${
          sticky
            ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-700 dark:text-white duration-300 transition-all ease-in-out"
            : ""
        }`}
      >
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden text-blue-700 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>
            <a className=" md:text-2xl font-bold cursor-pointer">bookStore</a>
          </div>
          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex ">
              <ul className="menu menu-horizontal px-1 z-50">{navItems}
              </ul>
              
              <ul className="menu menu-horizontal px-1 z-50 hover:bg-gray-700  mt-2 px-2 rounded-xl">
                <a href="/delivery"><CiDeliveryTruck className="text-3xl"></CiDeliveryTruck></a>
                
              </ul>
              <ul className="menu menu-horizontal px-1 z-50 hover:bg-gray-700  mt-2 px-2 rounded-xl">
                <a href="/Cart"><GiShoppingCart className="text-3xl"></GiShoppingCart></a>
                
              </ul>
            </div>
            <div className="md:hidden ">
           
            <ul className="menu menu-horizontal px-1 z-50 hover:bg-gray-700  mt-2 px-2 rounded-xl">
            <a href="/delivery"><CiDeliveryTruck className="text-3xl"></CiDeliveryTruck></a>
              </ul>
              <ul className="menu menu-horizontal px-1 z-50 hover:bg-gray-700  mt-2 px-2 rounded-xl">
            <a href="/Cart"><GiShoppingCart className="text-3xl"></GiShoppingCart></a>
              </ul>
            </div>


            {authUser ? (
              <Logout />
            ) : (
              <div className="rotate-180 mt-3 mr-5 hover:cursor-pointer  ">
                <a
                 className="menu menu-horizontal px-1 z-50 hover:bg-gray-700  mt-2 px-2 rounded-xl text-3xl bg-green-500"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                 <AiOutlineLogin></AiOutlineLogin>
                </a>
                <Login />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
