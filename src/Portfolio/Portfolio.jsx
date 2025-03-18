import Navbar from "../Navbar/Navbar";
 // Fixed spelling
import Projects from "../Projects/Projects";
import Skills from "../skills/Skills";
import About from "../About/About";


import Bannar from "../Bannar/Bannar";
import Testimunial from "../Testimunial/Testimunial";
import Contact from "../Contact/Contact";

export default function Portfolio() {
  return (
    <div className="bg-cover bg-[url('https://img.freepik.com/free-photo/deep-blue-plain-concrete-textured-background_53876-103890.jpg?semt=ais_hybrid')] pt-20">
      <header className="top-0 left-0 w-full z-50">
        <Navbar />
  <Bannar></Bannar>
      </header>
      
      <main>
        <Projects />
        <Skills />
        <About />
       <Testimunial></Testimunial>
<Contact></Contact>
      </main>
    </div>
  //              <div >
  //              <h1 className="mt-28  text-6xl font-bold text-white text-center -mb-16">
  //                  Contact Me
  //              </h1>
  //          </div>
  //          <div className="pb-20 ms-44 me-44">
  //              <div className="grid-cols-2  text-center  mt-10 p-20  text-2xl bg-stone-700 bg-cover pt-24 rounded-xl ">
  //                  {/* <h1 className="text-violet-500">Feel free to contact me</h1> */}
  //                  <h1 className="btn me-3 pt-8 pb-8 ps-14 pe-14 bg-slate-500 text-yellow-500 text-xl rounded-xl">Email : rihabbeg3@gmail.com</h1>
  //                  <h1 className="btn ps-14 pe-14 pt-8 pb-8  bg-slate-500 text-yellow-500 text-xl rounded-xl">Cell : 01305662526</h1>
  //                  <div className="text-center mt-3">
  //                      <h1 className="btn ps-14 pe-14 pt-8 pb-8  bg-slate-500 text-yellow-500 text-xl rounded-xl">Mymensing , Bangladesh</h1>
  //                  </div>
  //                  <div className="flex gap-2 justify-center -mb-24  mt-20">
  //                      <img src="https://img.icons8.com/ios11/512/facebook-new.png" className="w-12 " alt="" />
  //                      <img src="https://cdn-icons-png.freepik.com/256/15707/15707843.png?semt=ais_hybrid" className="w-12 " alt="" />
  //                  </div>
  //              </div>
  //              <div className=" mt-28  text-6xl font-serif text-yellow-500 text-center">
  //                  Thanks For Watching
  //              </div>
  //          </div>
   );
}
