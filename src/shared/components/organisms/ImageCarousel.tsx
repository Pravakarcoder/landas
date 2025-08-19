import React, { useState, useEffect } from "react";

interface CarouselItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  categories?: string[];
  backgroundColor?: string;
  textColor?: string;
}

interface AnimatedCarouselProps {
  items: CarouselItem[];
  autoPlayInterval?: number;
}

const AnimatedCarousel: React.FC<AnimatedCarouselProps> = ({
  items,
  autoPlayInterval = 4000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Determine number of items to show based on screen size
  const getItemsToShow = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 4; // lg
      if (window.innerWidth >= 640) return 2; // sm/md
      return 1; // mobile
    }
    return 4;
  };

  const [itemsToShow, setItemsToShow] = useState(getItemsToShow());

  useEffect(() => {
    const handleResize = () => setItemsToShow(getItemsToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + itemsToShow) % items.length);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [items.length, itemsToShow, autoPlayInterval]);

  // Create a continuous loop by duplicating items if necessary
  const visibleItems = [];
  for (let i = 0; i < itemsToShow; i++) {
    visibleItems.push(items[(currentIndex + i) % items.length]);
  }

  return (
    <div className="w-full overflow-hidden relative px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleItems.map((item) => (
          <div
            key={item.id}
            className={`rounded-xl overflow-hidden transform transition-all duration-700 ease-in-out hover:scale-105 animate-slideIn`}
            style={{ backgroundColor: item.backgroundColor || "#1A1A1A" }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 md:h-64 lg:h-72 object-cover rounded-t-xl "
            />
            <div className="p-4">
              <h3
                className={`font-semibold text-lg md:text-xl  ${
                  item.textColor || "text-white"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`text-sm md:text-base opacity-90  ${
                  item.textColor || "text-gray-300"
                }`}
              >
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Tailwind Keyframe animation for entire slide */}
      <style>
        {`
          @keyframes slideIn {
            0% { opacity: 0; transform: translateY(20px) scale(0.95); }
            20% { opacity: 1; transform: translateY(0) scale(1); }
            80% { opacity: 1; transform: translateY(0) scale(1); }
            100% { opacity: 0; transform: translateY(-20px) scale(0.95); }
          }
          .animate-slideIn {
            animation: slideIn ${autoPlayInterval}ms infinite;
          }
        `}
      </style>
    </div>
  );
};

export default AnimatedCarousel;
