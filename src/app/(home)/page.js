import Banner from "@/components/Banner";
import Questions from "@/components/Questions";
import WhyBetter from "@/components/WhyBetter";
import React from "react";

export default function page() {
  return (
    <div className="">
      <Banner></Banner>
      <WhyBetter></WhyBetter>
      <Questions></Questions>
    </div>
  );
}
