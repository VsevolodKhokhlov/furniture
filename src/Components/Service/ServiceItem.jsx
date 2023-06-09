import React from 'react'

const ServiceItem = ({img, title, paragraph}) => {
  return (
    <>
        <div className='md:flex justify-center item md:text-left text-center'>
          <div className='flex items-center w-36 p-3 m-auto'>
            <img src={img} alt="icon" className='w-16 bg-slate-200 rounded-full p-3 m-auto' />
          </div>
          <div className="flex-1">
            <h2 className='font-extrabold mb-2'>{title}</h2>
            <p>{paragraph}</p>
          </div>
        </div>
    </>
  )
}

export default ServiceItem