import React from "react";
import Text from "../atoms/Text";

function MessageContainer() {
  return (
    <section className="relative bg-[#1A1A1A] m-8 p-8 min-h-[300px] max-w-6xl mx-auto flex items-center">
      {/* Content (aligned left) */}
      <div className="text-left px-4 py-2 flex-1">
        <Text variant="h2" className="text-white mb-6">
          B2B 전문 의류 쇼핑몰!
        </Text>
        <Text variant="h3" className="text-white mb-8">
          15년 이상의 노하우로 믿고 거래 하세요
        </Text>
        <Text variant="body1" className="text-gray-300">
          수많은 기업이 선택한 신뢰받는 소재 소수, 지금 만나보세요
        </Text>
      </div>

      {/* Chat Icon (Bottom Right Corner - outside content div) */}
      <div className="absolute bottom-6 right-6">
        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
          <Text className="text-black font-bold">Ch</Text>
        </div>
      </div>
    </section>
  );
}

export default MessageContainer;
