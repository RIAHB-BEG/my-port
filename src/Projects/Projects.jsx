import React from 'react'

export default function Projects() {
    return (
        <>
<div className="ms-4 md:ms-56 lg:ms-44 text-4xl font-bold text-white">
  <h1>Projects</h1>
</div>

<div className="ms-4 md:ms-16 lg:ms-44 mt-10">
  <div className="card w-full sm:w-80 md:w-96 lg:w-96 shadow-xl rounded-2xl text-white border-2">
    <figure className="px-10 pt-10">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPynCnSHhhrecaJr9uuTllei1a_vpJPjUKI1FRM4ht3t_c20jDdfl-zQQcMVzlaYJvbs&usqp=CAU"
        alt="home"
        className="w-full rounded-lg"
      />
    </figure>
    <div className="card-body ms-8">
      <h2 className="card-title font-bold text-2xl">Home Lists In Landing Page</h2>
      <p className="font-bold">Technologies: Html, Javascript, React, Tailwind CSS, DaisyUI, Firebase</p>
      <p className="font-bold">Main features: Fully responsive, Login Page, and Button Actions</p>
      <div className="card-actions mt-4  space-y-4 sm:flex-row sm:space-x-4">
        <div className='flex md:gap-2'>
                 <div>
                    <a href="https://for-you-cspx.vercel.app/">
          <button className="bg-indigo-500 btn border-none p-4 sm:p-6 rounded-3xl text-white">
            Live Preview
          </button>
        </a>
        </div>

        <div>
              <a href="https://github.com/RIAHB-BEG/for-you/tree/main/src">
          <button className="bg-indigo-500 btn border-none p-4 sm:p-6 rounded-3xl text-white">
            Check on Github
          </button>
        </a>
        </div> 
        </div>
  
      
      </div>
    </div>
  </div>
</div>


        </>
    )
}
