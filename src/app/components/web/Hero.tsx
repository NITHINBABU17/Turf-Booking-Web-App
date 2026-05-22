'use client'

import React from 'react'
import Image from 'next/image'
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Link from 'next/link';

function Hero() {
  return (
    <section className='w-full h-screen'>
<div className='relative w-full h-full  '>
  <Image src="/turfhero.jpg" alt="Hero" fill className='object-cover' priority  />
  <div className='absolute inset-0 grid grid-cols-12 py-64 px-8 bg-black/50'>
    <div className='col-span-6 '>
 
<h1 className="text-6xl font-bold text-white flex flex-col">Choose Your <br /> Perfect Court</h1>
<p className="text-white mt-4">Find the best courts for your sports needs with our easy-to-use platform.</p>
<div className='mt-16 flex  items-start flex-col'>
 <AvatarGroup max={4} >
      <Avatar alt="User 1" src="/user1.jpg" />
      <Avatar alt="User 2" src="/user2.jpg" />
      <Avatar alt="User 3" src="/user3.jpg" />
      <Avatar alt="User 4" src="/user4.jpg" />
    </AvatarGroup>
    <div className='flex flex-col'>
    <p className=" text-white">4.2k+ Users</p>
    <p className=" text-white">enjoy our services</p>
    <Link className="mt-6 bg-[#C6FF00] text-black px-4 py-2 rounded-full" href='/user/Bookingslot'>Book your slot</Link>
    </div>
   
  </div>
  <div>

  </div>
    </div>
 
</div>

</div>

    </section>
  )
}

export default Hero