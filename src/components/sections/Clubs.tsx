import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';

export function ClubsSection() {
  return (
    <section className="container relative py-16 px-8 md:px-12 lg:px-16" id='clubs'>
      {/* Heading */}
      <div className="flex flex-col items-center mb-16 relative">
        <h2 className="text-5xl font-bold mb-3 capitalize">Clubs</h2>
      </div>

      {/* Main content container with increased max-width */}
      <div className="max-w-7xl mx-auto relative">
        {/* Clubs Grid with increased gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 lg:gap-24">
          {/* GDSC Section */}
          <div className="mb-12 md:mb-0">
            <h2 className="text-3xl mb-4">
              <span className="text-blue-600">G</span>
              <span className="text-red-500">D</span>
              <span className="text-yellow-500">S</span>  
              <span className="text-green-500">C</span>
            </h2>
            
            {/* <div className="relative w-full h-52 mb-6 rounded-lg overflow-hidden">
              <Image
                src="/path-to-your-gdsc-image.jpg"
                alt="GDSC"
                fill
                className="object-cover"
              />
            </div> */}
            
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
              ut labore et nulla pariatur. Lorem ipsum dolor sit amet.
            </p>
            
            <div className="socials">
              <p className="text-gray-700 mb-3">Socials:</p>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-700 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Newton School Coding Club Section */}
          <div>
            <div className="mb-4">
              {/* <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/nscc.png"
                  alt="Coding Club"
                  fill
                  className="object-cover"
                />
              </div> */}
              
              <div className="bg-black rounded-3xl p-6 flex items-center gap-4 hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-green-400"></div>
                <div className="text-white">
                  <div className="text-sm">Newton School</div>
                  <div className="text-lg font-semibold">Coding Club</div>
                  <div className="text-xs text-gray-400">Sister Nivedita University Chapter</div>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
              ut labore et nulla pariatur.
            </p>
            
            <div className="socials">
              <p className="text-gray-700 mb-3">Socials:</p>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-700 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* IoT Club Section */}
          {/* <div>
            <div className="mb-4">
              <div className="relative w-full h-52 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/path-to-your-iot-club-image.jpg"
                  alt="IoT Club"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="bg-purple-900 rounded-3xl p-6 flex items-center gap-4 hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
                <div className="text-white">
                  <div className="text-sm">Innovation Hub</div>
                  <div className="text-lg font-semibold">IoT Club</div>
                  <div className="text-xs text-gray-400">Emerging Tech Division</div>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              Exploring the world of connected devices and smart solutions. Join us in building
              the future of IoT applications and embedded systems.
            </p>
            
            <div className="socials">
              <p className="text-gray-700 mb-3">Socials:</p>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-700 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div> */}

          {/* Design Club Section */}
          {/* <div>
            <div className="mb-4">
              <div className="relative w-full h-52 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/path-to-your-design-club-image.jpg"
                  alt="Design Club"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl p-6 flex items-center gap-4 hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400"></div>
                <div className="text-white">
                  <div className="text-sm">Creative Studio</div>
                  <div className="text-lg font-semibold">Design Club</div>
                  <div className="text-xs text-gray-100">UI/UX & Visual Arts</div>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              Where creativity meets technology. We focus on UI/UX design, graphic design,
              and digital art creation using modern tools and techniques.
            </p>
            
            <div className="socials">
              <p className="text-gray-700 mb-3">Socials:</p>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-pink-600 hover:text-pink-700 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}