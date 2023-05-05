import React from 'react'

const QR = () => {
  return (
    <div 
        id="screen"
        className='w-full h-full bg-[#d6e2f0] m-0 p-0 relative'
        >
        <div 
            id="card"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[30rem] w-[30rem] rounded-[1.5rem] bg-white"
        > 
        
            <img src="C:\Users\laugh\OneDrive\Desktop\FrontEnd Projects\front_end_projects\src\qr-code-component\images\image-qr-code.png" alt="qr_code" width="500" height="600"/>

            <div
                id="subheader"
                className="text-green-600"
            >
                Improve your front-end skills by building projects 
            </div>

            <div 
                id="minor" 
                className=""
            >
                Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </div>

        </div>
    </div>
  )
}

export default QR