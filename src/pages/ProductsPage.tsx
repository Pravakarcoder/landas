import { useState } from "react";
import { useParams } from "react-router-dom";
import AppLayout from "@/shared/layouts/AppLayout";
import Text from "@/shared/components/atoms/Text";
import ProductsSection from "@/shared/components/organisms/ProductSection";

export default function ProductsPage() {
  const { category } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  const getCategoryTitle = (category: string | undefined) => {
    switch (category) {
      case "ss":
        return "SS 컬렉션";
      case "fw":
        return "FW 컬렉션";
      case "pants":
        return "팬츠";
      case "tshirt":
        return "T-SHIRT";
      case "sale":
        return "SALE";
      case "collection":
        return "컬렉션";
      case "community":
        return "커뮤니티";
      default:
        return "상품 목록";
    }
  };

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Category Header */}
        <div className="text-center mb-12">
          <Text variant="h1" className="text-3xl font-bold mb-2">
            {getCategoryTitle(category)}
          </Text>
          <Text variant="body1" color="muted">
            정가지은에 활화로 화영 화소자에 활아갇니다.
          </Text>
        </div>

        {/* Product Grid */}
        <ProductsSection />
      </div>
    </AppLayout>
  );
}
