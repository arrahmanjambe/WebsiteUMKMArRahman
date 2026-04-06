import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import StatsSection from "@/components/home/StatsSection";
import AchievementsSection from "@/components/home/AchievementsSection";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Beranda — Anyaman Bambu AR Rahman",
  description:
    "Anyaman Bambu AR Rahman — kerajinan topi pantai dan peci bambu premium dari Tangerang. Ramah lingkungan, buatan tangan.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <StatsSection />
      <AchievementsSection />
      <CTASection />
    </>
  );
}
