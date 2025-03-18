import About from "../About/About";


export default function Navbar() {
    return (
        <>
            <div className=" top-0 left-0 w-full   z-50  ">
                <div className="navbar px-6 md:px-10 lg:px-20 flex  md:gap-96 py-4   justify-center">

                    {/* Left - Brand Logo */}
                    <div className="flex  md:items-center gap-3">
                        {/* Mobile Dropdown */}
                        <div className="dropdown lg:hidden ">
                            <button tabIndex={0} className="btn btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
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
                            </button>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                            >
                                <li><a href="#home"> Home</a></li>
                                <li>   <a href="#contact"> Contact</a>
                                </li>
                                <li> <a href="#about">About</a></li>
                          
                            </ul>
                        </div>

                        {/* Brand Name */}
                        <button className="text-4xl font-bold text-white">
                            I'm Rihab Beg
                        </button>

                    </div>

                    {/* Center - Navigation (Hidden on Mobile) */}
                    <div className="hidden lg:flex ">
                        <ul className="menu menu-horizontal space-x-6 text-lg gap-10 ">
                            <li className=" bg-transparent text-white border-none ">

                                <a href="#home"> Home</a>

                            </li>
                            <li className=" bg-transparent text-white border-none">
                                <a href="#contact"> Contact</a>


                            </li>
                            <li className=" bg-transparent text-white border-none">

                                <a href="#about">About</a>
                            </li>


                        </ul>

                    </div>

                    {/* Right - Profile & Login Button */}
                    <div className="flex items-center gap-4 ">
                        <img
                            src="/WhatsApp Image 2025-03-05 at 22.49.14_79b0bc89.jpg"
                            className="w-10 h-10 rounded-full"
                            alt="User Profile"
                        />



                    </div>
                </div>
            </div>
        </>
    )
}
