'use client'
import React from 'react'
import Image from 'next/image'
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import EventIcon from "@mui/icons-material/Event";

function services() {
  return (
   <section id="services" className=" w-full">

  <div className="relative h-screen w-full flex items-center justify-center">
    <Image
      src="/swimming.jpg"
      alt="services"
      fill
      className="object-cover "
      priority
    />
  <div className="absolute inset-0 bg-black/60"></div>
    <div className="absolute items-center ">


      <div className="max-w-6xl mx-auto gap-6 px-6">
         <h1 className='text-sm font-bold underline text-center mt-8 p-4'>Services</h1>
         <h1 className="text-4xl md:text-5xl font-bold text-center">
          Fuel Your Passion with Our Full Service Experience
        </h1>
         <p className="mt-4 text-gray-200 text-center">
          We are more than just a platform — we are a community built for athletes,
          trainers, event organizers, and sports enthusiasts.
        </p>
      </div>

 <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 mt-12  z-10">

  <div className="bg-black p-6 rounded-xl shadow-lg text-center">
    
    <h3 className="text-lg font-semibold"><SportsSoccerIcon className="text-green-500 text-4xl" /> Slot Booking</h3>
    <p className="text-gray-600 text-sm mt-2">
      Book training sessions, events, gym hours or personal coaching just a few clicks.
    </p>
  </div>

 
  <div className="bg-black p-6 rounded-xl shadow-lg text-center">
   
    <h3 className="text-lg font-semibold"><FitnessCenterIcon className="text-green-500 text-4xl " /> Training Sessions</h3>
    <p className="text-gray-600 text-sm mt-2">
      Level up your game or start your fitness journey with our expert-led training.
    </p>
  </div>

  <div className="bg-black p-6 rounded-xl shadow-lg text-center">

    <h3 className="text-lg font-semibold"><EventIcon className="text-green-500 text-4xl  " /> Event Management</h3>
    <p className="text-gray-600 text-sm mt-2">
      Planning a sports tournament or workshop? Leave the logistics to us.
    </p>
  </div>

</div>

    </div>
  </div>


</section>
  )
}

export default services