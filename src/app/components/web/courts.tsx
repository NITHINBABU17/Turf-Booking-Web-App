'use client'

import React from 'react'
import Image from 'next/image'
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PoolIcon from "@mui/icons-material/Pool";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";

function Courts() {
  return (
    <section id="courts" className="w-full bg-black text-white overflow-hidden">

      {/* HERO SECTION */}
      <div className="relative min-h-screen w-full">

        <Image
          src="/court/court.png"
          alt="courts"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24">
         <h1 className='text-sm font-bold underline  mt-8 p-4'>Courts</h1>
          <div className="mb-20">



            <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-6">
              Play Beyond <br />
              Your Limits
            </h1>

            <p className="text-gray-300 text-lg mt-8 max-w-2xl leading-8">
              Experience world-class sports infrastructure designed for
              athletes, fitness lovers, and champions. Cricket, football,
              tennis, swimming, and more — all in one destination.
            </p>

            <button className="mt-10 bg-[#C6FF00] text-black hover:bg-green-600 transition-all duration-300 px-8 py-4 rounded-full text-lg font-semibold">
              Explore Courts
            </button>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 hover:scale-105 transition-all duration-300">
              <SportsSoccerIcon sx={{ fontSize: 50 }} />
              <h2 className="text-2xl font-bold mt-5">Football</h2>
              <p className="text-gray-300 mt-3 leading-7">
                Professional quality football turf with premium lighting.
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 hover:scale-105 transition-all duration-300">
              <SportsTennisIcon sx={{ fontSize: 50 }} />
              <h2 className="text-2xl font-bold mt-5">Tennis</h2>
              <p className="text-gray-300 mt-3 leading-7">
                Modern tennis courts built for performance and training.
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 hover:scale-105 transition-all duration-300">
              <PoolIcon sx={{ fontSize: 50 }} />
              <h2 className="text-2xl font-bold mt-5">Swimming</h2>
              <p className="text-gray-300 mt-3 leading-7">
                Olympic-style swimming pools for fitness and competitions.
              </p>
            </div>

            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 hover:scale-105 transition-all duration-300">
              <FitnessCenterIcon sx={{ fontSize: 50 }} />
              <h2 className="text-2xl font-bold mt-5">Fitness</h2>
              <p className="text-gray-300 mt-3 leading-7">
                Advanced fitness zones with modern workout facilities.
              </p>
            </div>

          </div>

        </div>
      </div>

    

    </section>
  )
}

export default Courts