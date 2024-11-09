'use client';
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      {/* Animated section title */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex flex-col items-center absolute top-16 -right-8"
      >
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md 
          shadow-lg shadow-[#1a1443]/50 backdrop-blur-sm">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-gradient-to-b from-[#1a1443] to-transparent"></span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 lg:order-1"
        >
          <div className="relative mb-8">
            <h2 className="font-medium text-[#16f2b3] text-xl uppercase">
              Who I am?
            </h2>
            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-[#16f2b3] to-transparent"></span>
          </div>
          
          <p className="text-gray-200 text-sm lg:text-lg leading-relaxed relative">
            {personalData.description}
            <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#16f2b3]/50 to-transparent"></span>
          </p>
        </motion.div>

        {/* Image Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:order-2 flex justify-center items-center"
        >
          <div className="relative group">
            {/* Decorative elements */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#16f2b3] to-[#1a1443] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            
            {/* Main image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#16f2b3] to-[#1a1443] rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <Image
                src={personalData.profile}
                width={280}
                height={280}
                alt="sanjeev"
                className="rounded-lg transition-all duration-500 grayscale hover:grayscale-0 group-hover:scale-105 cursor-pointer relative z-10"
              />
              
              {/* Animated corners */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#16f2b3] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
              <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#16f2b3] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"></div>
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#16f2b3] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-x-1 group-hover:translate-y-1"></div>
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#16f2b3] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1 group-hover:translate-y-1"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutSection;