'use client'

import React from 'react'
import Link from 'next/link'
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (

    <footer className="w-full bg-black text-white pt-20 pb-8">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16">

          {/* LOGO & ABOUT */}
          <div>

            <div className="flex items-center gap-3">

              <div className="bg-green-500 p-3 rounded-full">
                <SportsSoccerIcon />
              </div>

              <h1 className="text-3xl font-bold">
                TurfNext
              </h1>

            </div>

            <p className="text-gray-400 mt-6 leading-8">
              Premium sports courts and sports shopping platform for
              football, cricket, swimming, tennis, and fitness lovers.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4 mt-8">

              <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-all duration-300 cursor-pointer">
                <FacebookIcon />
              </div>

              <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-all duration-300 cursor-pointer">
                <InstagramIcon />
              </div>

              <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-all duration-300 cursor-pointer">
                <TwitterIcon />
              </div>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h2 className="text-2xl font-semibold mb-8">
              Quick Links
            </h2>

            <div className="flex flex-col gap-5 text-gray-400">

              <Link href="/" className="hover:text-green-400 transition-all duration-300">
                Home
              </Link>

              <Link href="/about" className="hover:text-green-400 transition-all duration-300">
                About Us
              </Link>

              <Link href="/courts" className="hover:text-green-400 transition-all duration-300">
                Courts
              </Link>

              <Link href="/shop" className="hover:text-green-400 transition-all duration-300">
                Shop
              </Link>

              <Link href="/contact" className="hover:text-green-400 transition-all duration-300">
                Contact
              </Link>

            </div>

          </div>

          {/* CONTACT INFO */}
          <div>

            <h2 className="text-2xl font-semibold mb-8">
              Contact Info
            </h2>

            <div className="flex flex-col gap-6">

              <div className="flex items-start gap-4">

                <div className="bg-white/10 p-3 rounded-full">
                  <CallIcon />
                </div>

                <div>
                  <p className="text-gray-400">Phone</p>
                  <h3 className="mt-1 font-semibold">
                    +91 98765 43210
                  </h3>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="bg-white/10 p-3 rounded-full">
                  <EmailIcon />
                </div>

                <div>
                  <p className="text-gray-400">Email</p>
                  <h3 className="mt-1 font-semibold">
                    info@turfnext.com
                  </h3>
                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="bg-white/10 p-3 rounded-full">
                  <LocationOnIcon />
                </div>

                <div>
                  <p className="text-gray-400">Address</p>
                  <h3 className="mt-1 font-semibold leading-7">
                    Kochi, Kerala, India
                  </h3>
                </div>

              </div>

            </div>

          </div>

          {/* NEWSLETTER */}
          <div>

            <h2 className="text-2xl font-semibold mb-8">
              Newsletter
            </h2>

            <p className="text-gray-400 leading-8">
              Subscribe to receive updates about sports events,
              courts, offers, and latest products.
            </p>

            <div className="mt-8">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/10 border border-white/10 rounded-full px-6 py-4 outline-none focus:border-green-500"
              />

              <button className="w-full bg-green-500 hover:bg-green-600 transition-all duration-300 py-4 rounded-full mt-4 font-semibold">
                Subscribe Now
              </button>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 pt-8">

          <p className="text-gray-500 text-center md:text-left">
            © 2026 TurfNext. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-center md:text-right">
            Developed By <span className="text-green-400 font-semibold">Nithin Babu B S</span>
          </p>

        </div>

      </div>

    </footer>

  )
}

export default Footer