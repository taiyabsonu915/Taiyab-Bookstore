import React from 'react'

import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";
import Delivery from './delivery'

function DeliveryNav() {
  return (
    <div>
      <Navbar></Navbar>
      <div className=" min-h-screen">
      <Delivery></Delivery>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default DeliveryNav
