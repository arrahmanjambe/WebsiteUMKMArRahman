import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import MissionSection from "@/components/about/MissionSection";
import FounderBio from "@/components/about/FounderBio";
import HeritageSection from "@/components/about/HeritageSection";
import WorkshopSection from "@/components/about/WorkshopSection";
import UNESCOSection from "@/components/about/UNESCOSection";
import MapSection from "@/components/about/MapSection";
import StatsSection from "@/components/home/StatsSection";

export const metadata: Metadata = {
  title: "Tentang Kami — Anyaman Bambu AR Rahman",
  description:
    "Cerita di balik Anyaman Bambu AR Rahman — dari tradisi keluarga Tangerang, perjalanan pendiri Ahmad Rahman, hingga pengakuan UNESCO Creative Cities Network.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <FounderBio />
      <HeritageSection />
      <WorkshopSection />
      <UNESCOSection />
      <MapSection />
      <StatsSection />
    </>
  );
}
