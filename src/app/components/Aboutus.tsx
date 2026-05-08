'use client'
import React from 'react'
import Image from 'next/image'

function Aboutus() {
  return (
   <section id="about">
    <div className='w-full h-full bg-[#fff] text-black py-16'>
    <h1 className='text-sm font-bold underline  mt-8 p-4'>About Us</h1>
    <div className='grid grid-cols-12 gap-4  p-4'>
        <div className='col-span-6'>
            <h1 className='text-4xl font-semibold'>Empowering Sports through <br /> Innovation and Convenience</h1>
       </div>
        <div className='col-span-6'>
            <p className='mt-4'>TurfNext is a leading provider of artificial turf solutions for residential and commercial properties. We are committed to delivering high-quality, durable, and aesthetically pleasing artificial grass that enhances outdoor spaces.</p>

        </div>
         </div>
         <div className='grid grid-cols-12 gap-4 mt-8 p-4'>
          <div className='col-span-6'>
                <div className="relative w-full h-[700px] ">
            
  <Image
    src="/basketball.jpg"
    alt="aboutusimage1"
    fill
    className="object-cover rounded-lg"
  />
</div>
</div>
          <div className='col-span-6'>

             <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-6'>
                     <Image src="/running.jpg" alt="aboutusimage1" width={400} height={300} className='object-cover rounded-lg'/>
               </div>
                <div className='col-span-6'>
                     <Image src="/swimming.jpg" alt="aboutusimage1" width={400} height={300} className='object-cover rounded-lg'/>

                </div>
             </div>
             <div className="col-span-12 mt-4">
               <p>TurfNext is a leading provider of artificial turf solutions for residential and commercial properties. We are committed to delivering high-quality, durable, and aesthetically pleasing artificial grass that enhances outdoor spaces.</p>
            </div>
             
      <div className="max-w-6xl mt-16 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 text-center">

        <div>
          <h2 className="text-4xl font-bold">10,000+</h2>
          <p className="mt-2 font-semibold">Athletes Trained Since 2015</p>
          <p className="text-gray-600 mt-2 text-sm">
            Proven track record: 8 years, 10,000+ success stories.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">97%</h2>
          <p className="mt-2 font-semibold">Satisfaction Rate</p>
          <p className="text-gray-600 mt-2 text-sm">
            Physical and mental gains backed by our participants.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold">10+</h2>
          <p className="mt-2 font-semibold">Professional Experience</p>
          <p className="text-gray-600 mt-2 text-sm">
            Decades of expertise, one powerful team.
          </p>
        </div>

      </div>

        </div>


    </div>
    </div>
    
  
   </section>
  )
}

export default Aboutus