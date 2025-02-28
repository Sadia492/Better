"use client";
import Image from "next/image";
import React from "react";
import { FaPhone, FaPhoneAlt } from "react-icons/fa";
import img from "@/assets/betty1.jpg";

export default function StartNav() {
  return (
    <div className="w-4/5 sticky top-0 bg-[#FEFCFA] mx-auto">
      {" "}
      <nav className="">
        <div className=" px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo or Brand Name */}
            <div className="text-xl font-medium text-gray-500">
              <span className="text-accent font-bold">Better</span>
              <br />
              Mortgage
            </div>

            {/* Call Button */}
            <a
              href="tel:4155238837"
              className="px-4 py-2 rounded-md transition-colors flex justify-center items-center font-bold"
            >
              <div className="bg-accent/10 p-5 rounded-full w-fit mr-2">
                <FaPhoneAlt></FaPhoneAlt>
              </div>
              Need Help Call (415) 523 8837
            </a>
          </div>
        </div>
        <div className="relative">
          <hr />
          <Image
            className="w-10 h-10 rounded-full absolute left-[50%] -top-[17px]"
            src={img}
            alt="girl"
          ></Image>
        </div>
      </nav>
    </div>
  );
}
