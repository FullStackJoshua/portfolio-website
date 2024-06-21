"use client";

import HeroSection from "../components/HeroSection";
import AboutMeSection from "../components/AboutMeSection";
import ProjectSection from "./ProjectSection";
import ContactSection from "./ContactSection";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto px-5 lg:px-28">
      <HeroSection />
      <AboutMeSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
