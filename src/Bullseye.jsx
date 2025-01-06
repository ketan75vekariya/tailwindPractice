import React from 'react'

const Bullseye = () => {
  return (
    <>
    <div className="min-h-screen grid place-content-center radial-blue">
        <div className='bg-emerald-500 w-52 h-52 rounded-full shadow-2xl grid place-content-center'>
          <div className='bg-teal-200 w-32 h-32 rounded-full grid place-content-center'>
            <div className='bg-teal-500 w-20 h-20 rounded-full grid place-content-center'>
              <div className='bg-teal-800 w-12 h-12 rounded-full grid place-content-center'></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bullseye