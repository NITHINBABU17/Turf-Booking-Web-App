"use client";

import React from 'react'
import Link from 'next/link'
// import SearchIcon from "@mui/icons-material/Search";
import CallIcon from "@mui/icons-material/Call";

function Navbar() {
  return (
    <section>
    
    <div className='w-full fixed z-10 top-0 p-4'>
      <div className='flex justify-between'>
        <div className='flex gap-64 items-center'>
        <h1 className="text-2xl font-bold text-[#C6FF00]">Turf</h1>
        <div className='flex gap-2 items-center'>
    <Link href="/">
   <div className="w-fit py-2 px-4 bg-[#374151] rounded-full">
  <p>Home</p>
</div>
  </Link>
  {/* anchor link to the about section on home */}
  <Link href="/#about">
 <div className="w-fit py-2 px-4 bg-[#374151] rounded-full">
  <p>About</p>
</div>
</Link>
<Link href="/#services">
 <div className="w-fit py-2 px-4 bg-[#374151] rounded-full">
  <p>Service</p>
</div>
</Link>
<Link href="/#courts">
 <div className="w-fit py-2 px-4 bg-[#374151] rounded-full">
  <p>Court</p>
</div>
</Link>
<Link href="/#shop">
<div className="w-fit py-2 px-4 bg-[#374151] rounded-full">
  <p>Shop</p>
</div>
</Link>

  </div>
</div>
<div className='flex gap-4 items-center'>
    {/* <div className="p-2 border  rounded-full flex items-center gap-4">
    <input type="search"  placeholder="Search..."  />
    <div className='w-8 h-8 bg-[#fff] rounded-full flex items-center justify-center'>
    <SearchIcon className="text-gray-500" />
    </div>
    </div> */}
   
    <button className="p-2 bg-[#000] text-white border rounded-full flex items-center gap-4" onClick={() => console.log("Search clicked")}> 
        <p>Contact Us</p>
        <div className='w-8 h-8 bg-[#166534] rounded-full flex items-center justify-center'>
            <CallIcon className="text-gray-500" />
            </div>
            </button>
</div>
</div>
    </div>
  </section>
    
  )
}

export default Navbar