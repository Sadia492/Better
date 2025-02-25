import Image from "next/image";
import phoneMockup from "@/assets/hero-variant-c-removebg-preview.png";
import google from "@/assets/icons8-google-48.png";
import { FiClock } from "react-icons/fi";

export default function Banner() {
  return (
    <section className="relative bg-primary lg:h-screen text-white flex flex-col justify-start items-center text-center pt-10">
      {/* Background Image */}
      <div className="lg:absolute lg:-bottom-[39px]  z-10 w-full h-full lg:w-[400px] lg:h-[600px]">
        <Image
          src={phoneMockup}
          alt="Phone showing mortgage approval"
          fill
          className="object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 mx-auto mt-14">
        <h1 className="lg:text-9xl text-5xl text-secondary font-semibold ">
          Mortgages <br /> made simple
        </h1>
        <div className="mt-14">
          <div className="lg:absolute lg:left-0 gap-6 lg:mt-8 flex flex-col justify-center items-center">
            <button className="bg-secondary text-green-900 px-6 py-3 rounded-full font-semibold text-lg hover:primary ">
              Start my approval
            </button>
            <div className="text-sm flex items-center gap-2">
              <div className="text-lg flex justify-center items-center gap-2">
                <FiClock />
                <p className="flex mt-2">3 min | No credit impact</p>
              </div>
            </div>
          </div>
          <div className="mt-8 lg:absolute lg:right-0 gap-2 text-center flex flex-col justify-center items-center">
            <div className="flex items-center">
              <Image
                src={google}
                alt="Phone showing mortgage approval"
                width={40}
                className="object-contain"
              />
              <span className="text-yellow-400 text-3xl">★★★★★</span>
            </div>
            <p className="text-sm">4.6 Stars | 3177 Google reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
}
