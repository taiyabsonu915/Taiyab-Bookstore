import React, { useState } from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contact from "./components/contact";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Cart from "./components/Cart";
import CartNav from "./components/CartNav";
import ContNav from "./components/ContNav";
import MathemeticNav from "./components/category/mathemeticNav";
import ArtNav from "./components/category/ArtNav";
import ScienceNav from "./components/category/ScienceNav";
import ComputerNav from "./components/category/ComputerNav";
import SocialNav from "./components/category/SocialNav";
import StaticNav from "./components/category/StaticNav";
import ComicNav from "./components/category/ComicNav";
import DeliveryNav from "./components/deliveryNav";
//https://taiyab-frontend.onrender.com/

function App() {
  
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          /> */}
          <Route path="/course" element={<Courses> </Courses>}></Route>
          <Route path="/course/mathemetics" element={<MathemeticNav />} />
          <Route path="/course/Science" element={<ScienceNav />} />
          <Route path="/course/Art" element={<ArtNav />} />
          <Route path="/course/Computers" element={<ComputerNav />} />
          <Route path="/course/Comics" element={<ComicNav />} />
          <Route path="/course/Social Science" element={<SocialNav />} />
          <Route path="/course/Bayesian statistical decision theory" element={<StaticNav />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<ContNav />} />
          <Route path="/Cart" element={<CartNav />} />
          <Route path="/delivery" element={<DeliveryNav />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
