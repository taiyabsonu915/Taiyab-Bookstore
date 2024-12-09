import React from "react";
import sonu from "../../public/sonu.png";// Apna photo import karo


function About () {
  return (

    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center py-16">
          <div className="shadow-[10px_10px_20px_#bebebe]">
      <div className="max-w-3xl bg-gray-800 p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-6">About Me</h1>
        
        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <img
            src={sonu}// replace with your photo's path or URL
            alt="Taiyab"
            className="w-32 h-32 rounded-full object-cover border-4 border-pink-600 shadow-lg"
          />
        </div>

        <div className="space-y-6">
          {/* Name and Role */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-white">Hello, I'm Taiyab</h2>
            <p className="text-lg text-gray-400 mt-2">A passionate Software Engineer with expertise in React, Node.js, and MongoDB.</p>
          </div>

          {/* Skills & Technologies */}
          <div>
            <h3 className="text-xl font-semibold text-pink-600">Technologies I work with:</h3>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>React.js</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>TailwindCss</li>
              <li>JavaScript, HTML, CSS</li>
              <li>Version Control (Git, GitHub)</li>
            </ul>
          </div>

          {/* About Myself */}
          <div>
            <h3 className="text-xl font-semibold text-pink-600">A little about me:</h3>
            <p className="text-gray-300 mt-2">
              I'm a software engineering fresher with a passion for building web applications and learning new technologies. 
              I love working with front-end technologies like React to build responsive, dynamic user interfaces, and back-end technologies like Node.js and MongoDB to create efficient, scalable server-side applications. 
              I'm always looking for new challenges to grow my skills and make an impact in the tech world.
            </p>
          </div>

          {/* LinkedIn Link */}
          <div className="text-center mt-4">
            <h3 className="text-xl font-semibold text-pink-600">Connect with me:</h3>
            <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
       </div>
    </div>
  );
}

export default About;
