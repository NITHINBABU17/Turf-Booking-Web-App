'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Shop = () => {
  return (

    <section
      id="shop"
      className="w-full bg-white text-black py-24 overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* HEADING */}
        <div className="mb-20 text-center">

         <h1 className='text-sm font-bold underline  mt-8 p-4'>Shop</h1>
          <h1 className="text-5xl md:text-6xl font-bold mt-4 leading-tight">
            Shop By Sports Category
          </h1>

          <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg leading-8">
            Premium sports accessories and equipment designed for
            professionals, beginners, and sports enthusiasts.
          </p>

        </div>

        {/* HORIZONTAL CARDS */}
        <div className="flex flex-col gap-10">

          {/* FOOTBALL */}
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#f8f8f8] rounded-[40px] overflow-hidden shadow-xl">

            {/* IMAGE */}
            <div className="relative h-[350px] lg:h-full overflow-hidden">

              <Image
                src="/shop/football.png"
                alt="football"
                fill
                className="object-cover hover:scale-110 transition-all duration-700"
              />

            </div>

            {/* CONTENT */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">

              <span className="bg-blue-500 text-white px-5 py-2 rounded-full w-fit text-sm font-semibold">
                Football
              </span>

              <h2 className="text-4xl font-bold mt-6">
                Professional Football Gear
              </h2>

              <p className="text-gray-600 mt-6 leading-8 text-lg">
                Explore premium footballs, jerseys, shoes, goalkeeper gloves,
                cones, and training accessories designed for peak performance.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap items-center gap-4 mt-10">

                <h3 className="text-3xl font-bold text-green-600">
                  ₹1,499
                </h3>

                <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all duration-300">
                  Buy Now
                </button>

                <Link
                  href="/purchase/football"
                  className="border-2 border-black text-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-300"
                >
                  Explore More
                </Link>

              </div>

            </div>

          </div>

          {/* SWIMMING */}
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#f8f8f8] rounded-[40px] overflow-hidden shadow-xl">

            {/* IMAGE */}
            <div className="order-1 lg:order-2 relative h-[350px] lg:h-full overflow-hidden">

              <Image
                src="/shop/swimming.png"
                alt="swimming"
                fill
                className="object-cover hover:scale-110 transition-all duration-700"
              />

            </div>

            {/* CONTENT */}
            <div className="order-2 lg:order-1 p-10 lg:p-14 flex flex-col justify-center">

              <span className="bg-cyan-500 text-white px-5 py-2 rounded-full w-fit text-sm font-semibold">
                Swimming
              </span>

              <h2 className="text-4xl font-bold mt-6">
                Swimming Essentials
              </h2>

              <p className="text-gray-600 mt-6 leading-8 text-lg">
                Shop swimming goggles, professional swimwear, caps,
                kickboards, and premium swimming accessories.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap items-center gap-4 mt-10">

                <h3 className="text-3xl font-bold text-green-600">
                  ₹999
                </h3>

                <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all duration-300">
                  Buy Now
                </button>

                <Link
                  href="/purchase/swimming"
                  className="border-2 border-black text-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-300"
                >
                  Explore More
                </Link>

              </div>

            </div>

          </div>

          {/* CRICKET */}
          <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#f8f8f8] rounded-[40px] overflow-hidden shadow-xl">

            {/* IMAGE */}
            <div className="relative h-[350px] lg:h-full overflow-hidden">

              <Image
                src="/shop/cricket.png"
                alt="cricket"
                fill
                className="object-cover hover:scale-110 transition-all duration-700"
              />

            </div>

            {/* CONTENT */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">

              <span className="bg-green-500 text-white px-5 py-2 rounded-full w-fit text-sm font-semibold">
                Cricket
              </span>

              <h2 className="text-4xl font-bold mt-6">
                Complete Cricket Kit
              </h2>

              <p className="text-gray-600 mt-6 leading-8 text-lg">
                Discover premium bats, gloves, pads, helmets, cricket balls,
                and accessories for professional and beginner players.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap items-center gap-4 mt-10">

                <h3 className="text-3xl font-bold text-green-600">
                  ₹2,999
                </h3>

                <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-green-600 transition-all duration-300">
                  Buy Now
                </button>

                <Link
                  href="/purchase/cricket"
                  className="border-2 border-black text-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-300"
                >
                  Explore More
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Shop