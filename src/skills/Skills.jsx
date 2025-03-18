import React from 'react'

export default function Skills() {
    return (
        <>
            <div>
                <h1 className="mt-28 text-center text-6xl font-bold text-white">
                    My Skills
                </h1>
            </div>

            <div className="flex justify-center mt-20  md:gap-36 ">
                <div>
                    <img
                        src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-64.png"
                        alt="HTML5"
                        className="w-16"
                    />
                </div>
                <div>
                    <img
                        src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-64.png"
                        alt="CSS3"
                        className="w-16"
                    />
                </div>
                
                <div>
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/721/721671.png"
                        alt="JavaScript"
                        className="w-16"
                    />
                </div>
                <div>
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/11189/11189054.png"
                        alt="React"
                        className="w-14"
                    />
                </div>
           
                <div>  
                       
                    <img src="data:image/png;base64,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" alt="" className="w-16" />
                </div>

                <div>
                    
                    <img src="data:image/png;base64,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" alt="" className="w-16" />
                </div>
            </div>


        </>
    )
}
