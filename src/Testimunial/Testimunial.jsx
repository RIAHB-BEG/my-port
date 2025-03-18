import React from 'react'

export default function Testimunial() {
    return (
        <>
<div>
  <div>
    <h1 className="mt-28 text-6xl font-bold text-white text-center">
      Testimonial
    </h1>
  </div>
  <div className="flex flex-col md:flex-row justify-between items-center mx-4 md:mx-44 mt-10">
    <div className="text-center md:text-left md:w-1/2">
      <p className="text-slate-400 mt-10">
        <span className="text-yellow-300">The design quality</span>, flexibility, documentation, functionality<br />
        and support are all absolutely <span className="text-yellow-300">excellent</span>. I always appreciate<br />
        whatever the client requires for her order.
      </p>
      <p className="text-white mt-5">
        Rahabul Rihab Beg <br /><br />
        --- Web Developer
      </p>
    </div>

    <div className="mt-10 md:mt-28 md:w-1/2 flex justify-center">
      <img 
        src="https://media.istockphoto.com/id/1332358775/photo/young-couple-shaking-hands-deal-contract-real-estate-investment-business-agreement-agent.jpg?s=612x612&w=0&k=20&c=tADtuQ9F_eKe_hMH0k5Ldg7N4p5BojisWf2n-jXar_I=" 
        className="w-80"
        alt="Testimonial" />
    </div>
  </div>
</div>


        </>
    )
}
