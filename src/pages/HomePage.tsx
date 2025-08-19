import AppLayout from "@/shared/layouts/AppLayout";
import ProductsSection from "@/shared/components/organisms/ProductSection";
import ImageCarouselComponent from "@/shared/components/molecules/ImageCarouselComponent";
import HeroSection from "@/shared/components/organisms/HeroSection";
import MessageContainer from "@/shared/components/organisms/MessageContainer";

export default function HomePage() {
  return (
    <AppLayout>
      <HeroSection />
      {/* Add ImageCarousel component  */}
      <ImageCarouselComponent />
      {/*Products Component*/}
      <ProductsSection />
      <ProductsSection />
      {/* Dark MessageContainer Section*/}
      <MessageContainer />
    </AppLayout>
  );
}
