import React from 'react'

export default function About() {
    return (
        <>
            <div id="about">
                <h1 className="mt-28 text-center text-6xl font-bold text-white">
                    About Me
                </h1>
                <div>
                    <ul className="timeline timeline-snap-icon timeline-vertical text-white mt-20">
                        <li>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-start mb-10 text-center md:text-end">
                                <time className="font-mono italic">2015-2024</time>
                                <div className="text-lg font-black">Education</div><br />
                                In 2021, I passed my PSC examination with a 5.00 grade. I also passed my JSC examination in 2024. Now, I study in class 9 at Mymensingh Zilla School.
                            </div>
                            <hr />
                        </li>

                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-end text-center md:text-start mb-10">
                                <time className="font-mono italic">2024</time>
                                <div className="text-lg font-black">Completed Web Development Course</div><br />
                                I completed my web development course from Freelance Corner. The course lasted 8 months.
                            </div>
                            <hr />
                        </li>

                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-start text-center md:text-end mb-10">
                                <time className="font-mono italic">2023</time>
                                <div className="text-lg font-black">Before the Course</div><br />
                                I became more interested in IT and decided to try programming.
                            </div>
                            <hr />
                        </li>

                        <li>
                            <hr />
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="timeline-end text-center md:text-start mb-10">
                                <time className="font-mono italic">2024</time>
                                <div className="text-lg font-black">Why Web Development?</div><br />
                                I decided to work out which field I wanted to build a career in and started learning frontend development. Now I am able to make projects using frontend technologies.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}
