import { useState } from "react";
import { useParams } from "react-router-dom";
import AppLayout from "@/shared/layouts/AppLayout";
import Text from "@/shared/components/atoms/Text";
import Image from "../../../../public/assets/JacketImage/jacket.jpg";

export default function ProductsSection() {
  const PRODUCTS = [
    {
      id: 1,
      name: "심플하지만 느낌 되다려 심플하지만 느낌 되다려...",
      originalPrice: "000,000원",
      salePrice: "000,000원",

      image: Image,
    },
    {
      id: 2,
      name: "심플하지만 느낌 되다려 심플하지만 느낌 되다려...",
      originalPrice: "000,000원",
      salePrice: "000,000원",

      image: Image,
    },
    // ... repeat for 8 products
  ];

  // Generate 8 products
  const products = Array.from({ length: 4 }, (_, i) => ({
    ...PRODUCTS[0],
    id: i + 1,
  }));

  return (
    <AppLayout>
      <section className="w-full">
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
          {/* Centered text */}
          <div className="min-h-[15vh] sm:min-h-[25vh] flex items-center justify-center text-center">
            <div className="w-full">
              <h1 className="font-extrabold tracking-tight text-sm  md:text-base lg:text-xl leading-tight">
                가볍고 뛰어난 보온성을 자랑하는 방한조끼
              </h1>
              <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-500">
                추운 날씨에도 따뜻하게, 활동성은 그대로 유지합니
              </p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 py-8  flex justify-center sm:flex-none">
            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {products.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="bg-gray-100 rounded-lg mb-4 overflow-hidden w-[350px] h-[420px] md:w-[300px] md:h-[370px] sm:w-full sm:h-[300px] rotate-0 opacity-100 mr-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Color Options */}
                  <div className="flex justify-center space-x-1 mb-3 ">
                    {[...Array(10)].map((_, index) => {
                      let bgClass = "bg-[#FFC40B]"; // default yellow

                      if (index === 1 || index === 2)
                        bgClass = "bg-black"; // 2nd and 3rd black
                      else if (index === 3)
                        bgClass = "bg-transparent border border-gray-300"; // 4th no color

                      return (
                        <div
                          key={index}
                          className={`w-4 h-4 rounded-full border border-gray-300 ${bgClass}`}
                        />
                      );
                    })}
                  </div>

                  <Text variant="body2" className="text-sm mb-2 line-clamp-2">
                    {product.name}
                  </Text>

                  <div className="flex justify-between items-center px-4 md:px-0">
                    <Text
                      variant="body2"
                      color="muted"
                      className="text-sm line-through"
                    >
                      정가 {product.originalPrice}
                    </Text>
                    <Text
                      variant="body1"
                      className="font-semibold text-primary"
                    >
                      {product.salePrice}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
}
