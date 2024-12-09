import React, { useState } from "react";

function Contact () {
 
  return (<div className="flex h-screen items-center justify-center">
  <div className=" w-[600px] ">
    <div className="modal-box shadow-[10px_10px_20px_#bebebe]">
    <div className="modal-box  max-w-3xl bg-black-500 p-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-105">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Contact Us</h1>
        
        {/* Contact Information */}
        <div className="space-y-8">
          {/* Email */}
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12.5l-7-5-7 5V18a1 1 0 001 1h12a1 1 0 001-1v-5.5z"
              />
            </svg>
            <span className="text-xl">Email: <a href="mailto:taiyabsonu915@gmail.com" className="text-blue-600 hover:underline">taiyabsonu915@gmail.com</a></span>
          </div>

          {/* Instagram */}
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18.364 5.636a9 9 0 11-12.728 0 9 9 0 0112.728 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-xl">Instagram: <a href="https://instagram.com/taiyabli321" className="text-pink-500 hover:underline">taiyabli321</a></span>
          </div>

          {/* Mobile */}
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h11M9 21V3m-6 6a9 9 0 0118 0c0 5-4 9-9 9a9 9 0 01-9-9z"
              />
            </svg>
            <span className="text-xl">Mobile: <a href="tel:+919876543210" className="text-green-500 hover:underline">+91-761997XXXX</a></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);
}

export default Contact;
