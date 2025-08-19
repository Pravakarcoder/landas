import React from "react";
import ImageCarousel from "@/shared/components/organisms/ImageCarousel";

function ImageCarouselComponent() {
  // Carousel data
  const carouselItems = [
    {
      id: 1,
      title: "가볍고 뛰어난 보온성을\n자랑하는 방한조끼",
      subtitle: "추운 날씨에도 따뜻하게, 활동성은 그대로 유지합니다",
      image:
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      categories: ["카테고리명", "카테고리명", "카테고리명"],
      backgroundColor: "#e5e5e5",
      textColor: "text-gray-800",
    },
    {
      id: 2,
      title: "가볍고 뛰어난 보온성을\n자랑하는 방한조끼",
      subtitle: "추운 날씨에도 따뜻하게, 활동성은 그대로 유지합니다",
      image:
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      categories: ["카테고리명", "카테고리명", "카테고리명"],
      backgroundColor: "#e5e5e5",
      textColor: "text-gray-800",
    },
    {
      id: 3,
      title: "가볍고 뛰어난 보온성을\n자랑하는 방한조끼",
      subtitle: "추운 날씨에도 따뜻하게, 활동성은 그대로 유지합니다",
      image:
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      categories: ["카테고리명", "카테고리명", "카테고리명"],
      backgroundColor: "#e5e5e5",
      textColor: "text-gray-800",
    },
    {
      id: 4,
      title: "가볍고 뛰어난 보온성을\n자랑하는 방한조끼",
      subtitle: "추운 날씨에도 따뜻하게, 활동성은 그대로 유지합니다",
      image:
        "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      categories: ["카테고리명", "카테고리명", "카테고리명"],
      backgroundColor: "#e5e5e5",
      textColor: "text-gray-800",
    },
  ];

  return (
    <div className="m-16">
      <ImageCarousel items={carouselItems} autoPlayInterval={7000} />
    </div>
  );
}

export default ImageCarouselComponent;
