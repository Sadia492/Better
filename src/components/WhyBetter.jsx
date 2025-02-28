"use client";
import { useState } from "react";
import Image from "next/image";
import Arian from "@/assets/still-quote-Arian.jpg";
import Amanda from "@/assets/still-quote-Amanda.jpg";
import Paul from "@/assets/still-quote-Paul.jpg";
import { FaStar } from "react-icons/fa";

// const testimonials = [
//   "/assets/still-quote-Arian.jpg",
//   "/assets/still-quote-Amanda.jpg",
//   "/assets/still-quote-Paul.jpg",
// ];

export default function WhyBetter() {
  const [currentImg, setCurrentImg] = useState(Arian);

  return (
    <div className="flex flex-col md:flex-row items-center space-x-16 justify-between bg-white mt-16">
      {/* Image Section */}
      <div className="w-full flex flex-col md:w-1/2 justify-center items-center">
        <div>
          <Image
            src={currentImg}
            alt="Testimonial Image"
            width={400}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex gap-6 mt-6">
          <button
            onClick={() => setCurrentImg(Arian)}
            className="py-2 px-4 border-2 transition-all duration-100 font-bold hover:text-accent hover:border-4 hover:border-accent rounded-full"
          >
            Arian
          </button>
          <button
            className="py-2 px-4 border-2 transition-all duration-100 font-bold hover:text-accent hover:border-4 hover:border-accent rounded-full"
            onClick={() => setCurrentImg(Amanda)}
          >
            Amanda
          </button>
          <button
            className="py-2 px-4 border-2 transition-all duration-100 font-bold hover:text-accent hover:border-4 hover:border-accent rounded-full"
            onClick={() => setCurrentImg(Paul)}
          >
            Paul
          </button>
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
        <h2 className="text-8xl font-bold text-gray-900">
          Find out why <br /> we’re better.
        </h2>
        <button className="mt-4 px-8 py-4 bg-primary text-white rounded-full hover:bg-accent transition">
          See all our stories
        </button>
        <p className="mt-2 text-gray-600 flex items-center">
          <FaStar className="text-accent" /> Trustpilot Excellent 4.4 out of 5
        </p>
      </div>
    </div>
  );
}
