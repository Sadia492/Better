"use client";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Questions() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("/questions.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);

        // Set default section to "products"
        const defaultSection = data.find((item) => item.id === "products");
        setFilteredData(defaultSection || {});
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleFilter = (category) => {
    const filtered = data.find((item) => item.id === category);
    setFilteredData(filtered || {});
  };

  return (
    <div className="w-11/12 mx-auto my-16">
      <div className="flex flex-col lg:flex-row justify-between lg:items-end items-start">
        <h2 className="font-semibold text-6xl">
          Got questions?
          <br />
          We've got answers
        </h2>
        <div className="flex gap-6 mt-6">
          <button
            onClick={() => handleFilter("products")}
            className="py-2 px-4 border-2 transition-all duration-100 font-bold hover:text-accent hover:border-4 hover:border-accent rounded-full"
          >
            Our Products
          </button>
          <button
            onClick={() => handleFilter("calculators")}
            className="py-2 px-4 border-2 transition-all duration-100 font-bold hover:text-accent hover:border-4 hover:border-accent rounded-full"
          >
            Calculators
          </button>
          <button
            onClick={() => handleFilter("guides")}
            className="py-2 px-4 border-2 transition-all duration-100 font-bold hover:text-accent hover:border-4 hover:border-accent rounded-full"
          >
            Guides & FAQs
          </button>
        </div>
      </div>

      {/* Render the filtered section */}
      <div className="mt-8">
        {filteredData?.id ? (
          <div>
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-x-8 gap-y-8">
              <div className="bg-accent/5 px-12 rounded-xl py-8 w-full">
                <h3 className="text-2xl font-bold">
                  {filteredData.Section1title}
                </h3>
                <p className="border-2 rounded-full flex justify-center items-center p-4 w-fit ">
                  <FaArrowRight></FaArrowRight>
                </p>
                <img
                  src={filteredData.Section1image}
                  alt={filteredData.Section1title}
                  className="mt-2 w-full rounded-lg"
                />
              </div>

              <div className="col-span-2 grid md:grid-cols-3 grid-cols-1  bg-accent/5 px-12 rounded-xl py-8 gap-6 h-full">
                <div className="col-span-2">
                  <h3 className="text-xl font-bold">
                    {filteredData.Section2title}
                  </h3>
                  <p className="text-gray-600">
                    {filteredData.Section2description}
                  </p>
                  <p className="border-2 rounded-full flex justify-center items-center p-4 w-fit ">
                    <FaArrowRight></FaArrowRight>
                  </p>
                </div>
                <img
                  src={`${filteredData.Section2image}`}
                  alt={filteredData.Section2title}
                  className="mt-2"
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-x-8 gap-y-8 mt-8">
              <div className="col-span-2 grid md:grid-cols-3 grid-cols-1 bg-accent/5 px-12 rounded-xl py-8 gap-6 h-full">
                <img
                  src={`${filteredData.Section3image}`}
                  alt={filteredData.Section3title}
                  className="mt-2"
                />
                <div className="col-span-2">
                  <h3 className="text-xl font-bold">
                    {filteredData.Section3title}
                  </h3>
                  <p className="text-gray-600">
                    {filteredData.Section3description}
                  </p>
                  <p className="border-2 rounded-full flex justify-center items-center p-4 w-fit ">
                    <FaArrowRight></FaArrowRight>
                  </p>
                </div>
              </div>
              <div className="bg-accent/5 px-12 rounded-xl py-8">
                <h3 className="text-2xl font-bold">
                  {filteredData.Section4title}
                </h3>
                <p className="border-2 rounded-full flex justify-center items-center p-4 w-fit ">
                  <FaArrowRight></FaArrowRight>
                </p>
                <img
                  src={filteredData.Section4image}
                  alt={filteredData.Section4title}
                  className="mt-2 rounded-lg"
                />
              </div>
            </div>
          </div>
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
}
