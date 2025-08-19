import { Facebook, Instagram, Youtube } from "lucide-react";
import React from "react";
import Text from "../atoms/Text";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="bg-[#1A1A1A] p-8 md:p-20 overflow-x-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20 w-full max-w-7xl mx-auto">
        <div className="lg:col-span-2">
          <Text variant="h2" className="text-yellow-400 mb-6">
            LANDAS
          </Text>
          <div className="space-y-2 text-[#666666]">
            <Text variant="body2">
              <strong>대표이사 :</strong> 장창진
            </Text>
            <Text variant="body2">
              <strong>사업자등록번호 :</strong> 201-86-15245
            </Text>
            <Text variant="body2">
              <strong>서울특별시 중구 다신로 139 (랜다스빌딩) 6층</strong>
            </Text>
            <Text variant="body2">
              <strong>통신판매업신고 :</strong> 중구 제0575호
            </Text>
            <Text variant="body2">
              <strong>개인정보보호책임자 :</strong> 최주연
            </Text>
            <p className="text-xs text-muted-foreground">
              Copyright © WWW.Leb12mail.com All right reserved
            </p>
          </div>
        </div>

        <div>
          <Text variant="h4" className="text-[#666666] mb-6">
            대표 번호 및 AS 문의
          </Text>
          <div className="space-y-2 text-[#666666]">
            <Text variant="h3" className="text-white font-bold">
              1661-6244
            </Text>
            <Text variant="body2">
              <strong>평일 :</strong> 09:00 ~ 18:00
            </Text>
            <Text variant="body2">
              <strong>기휴 :</strong> 기업은행
            </Text>
            <Text variant="body2">
              <strong>계좌번호 :</strong> 213-111127-04-035
            </Text>
            <Text variant="body2">
              <strong>예금주 :</strong> (주)랜다스
            </Text>
          </div>
        </div>

        <div>
          <div className="flex flex-row flex-wrap items-center gap-5 mb-4 sm:mb-6 md:mb-8">
            <Text variant="h4" className="text-[#666666]">
              개인정보처리방침
            </Text>
            <Text variant="body2" className="text-[#666666]">
              이용약관
            </Text>
          </div>
          <div className="flex space-x-4 mb-6">
            <Link
              to={"#"}
              className="text-[#666666] hover:text-white transition-colors duration-200"
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link
              to={"#"}
              className="text-[#666666] hover:text-white transition-colors duration-200"
            >
              <Facebook className="h-6 w-6" />
            </Link>
            <Link
              to="#"
              className="text-[#666666] hover:text-white transition-colors duration-200"
            >
              <Youtube className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
