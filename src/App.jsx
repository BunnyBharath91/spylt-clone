import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import { useGSAP } from "@gsap/react";
import BenefitSection from "./sections/BenefitSection";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <BenefitSection />
          <div className="h-dvh"></div>
        </div>
      </div>
    </main>
  );
};

export default App;
