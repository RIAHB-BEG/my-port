import React from "react";


export default function Bannar() {



  return (
    <>
      <div id="home" className="pt-44 px-6 sm:px-16 md:px-56">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="pb-32 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="text-violet-600 mb-4 block">
                Hello, I'm Rihab Beg,
              </span>
              <span className="text-white font-bold text-4xl sm:text-5xl md:text-6xl mt-2 block">
                Frontend Developer.
              </span>
            </h1>
            <p className="text-slate-200 font-serif mt-8 text-sm sm:text-base md:text-lg">
              Proficiency in HTML, CSS, JavaScript, React, problem-solving, teamwork, and using <br />
              browser developer tools are essential for front-end developers.
            </p>
            <a href="src/Bannar/Untitled document (3).pdf" download>
              <button className="btn mt-5 bg-indigo-500 text-white p-4 sm:p-6 rounded-3xl border-none">
                Download CV 
              </button>
            </a>
          </div>
          <div className="flex justify-center md:justify-start ">
            <img
              src="/WhatsApp Image 2025-03-05 at 22.49.14_79b0bc89.jpg"
              alt="Rihab Beg"
              className="sm:w-64 md:w-96 rounded-full"
            />
          </div>
        </div>
      </div>

    
    </>
  );
}
