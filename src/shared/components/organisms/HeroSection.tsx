import React from "react";
import Text from "../atoms/Text";

import heroSectionImage from "../../../../public/assets/HeroSectionImage/heroImage.jpg";

function HeroSection() {
  return (
    <section className="relative bg-black min-h-screen flex items-center font-['Zen_Dots']">
      <div className="absolute inset-0">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80">
          <img
            src={heroSectionImage}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex justify-end items-center h-full 2xl:mt-6">
          <div className="text-right max-w-lg">
            <Text className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Performance-Ready
            </Text>
            <Text className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold">
              Apparel for Work & Beyond
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
