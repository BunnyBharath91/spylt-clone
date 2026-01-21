import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./sections/NutritionSection";
import BenefitSection from "./sections/BenefitSection";
import TestimonialSection from "./sections/TestimonialSection";
import FooterSection from "./sections/FooterSection";
import { useState, useEffect } from "react";
import PreLoader from "./components/PreLoader";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [contentReady, setContentReady] = useState(false);

  // Initialize smooth scrolling when page is loaded
  useGSAP(() => {
    if (loaded && !ScrollSmoother.get()) {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
      });
      ScrollTrigger.refresh();
    }
  }, [loaded]);

  // Ensure content is only interactive after load completes
  useEffect(() => {
    if (loaded) {
      // Small delay to ensure DOM is fully painted before interactions
      const timer = setTimeout(() => {
        setContentReady(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [loaded]);

  return (
    <main>
      {!loaded && <PreLoader onComplete={() => setLoaded(true)} />}

      {loaded && (
        <div style={{ pointerEvents: contentReady ? "auto" : "none" }}>
          <NavBar />
          <div id="smooth-wrapper">
            <div id="smooth-content">
              <HeroSection />
              <MessageSection />
              <FlavorSection />
              <NutritionSection />
              <div>
                <BenefitSection />
                <TestimonialSection />
              </div>
              <FooterSection />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default App;
