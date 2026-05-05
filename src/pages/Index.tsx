import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import HomePlacementSection from "@/components/home/HomePlacementSection";
import FeaturedTreks from "@/components/home/FeaturedTreks";
import TrustSection from "@/components/home/TrustSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import AtlasSection from "@/components/home/AtlasSection";
import FAQSection from "@/components/home/FAQSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HomePlacementSection />
      <CategoriesSection />
      <FeaturedTreks />
      <ProgramsSection />
      <AtlasSection />
      <TrustSection />
      <FAQSection />
    </Layout>
  );
};

export default Index;
