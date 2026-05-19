import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { StartSection } from "./components/StartSection";
import { FeaturesChess } from "./components/FeaturesChess";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { StatsSection } from "./components/StatsSection";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { CtaFooter } from "./components/CtaFooter";
import { ThreeBackground } from "./components/ThreeBackground";
import { SocialMediaMarketing } from "./components/SocialMediaMarketing";

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.hash || "#home");

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || "#home");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (currentPath === "#social-media") {
      window.scrollTo(0, 0);
    } else {
      const targetId = currentPath.replace("#", "");
      if (targetId && targetId !== "home") {
        // Wait a tiny bit for the components to render before scrolling
        const timer = setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
        return () => clearTimeout(timer);
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [currentPath]);

  const isSocialMediaPage = currentPath === "#social-media";

  return (
    <div className="bg-black min-h-screen text-white font-body selection:bg-white selection:text-black relative overflow-x-hidden">
      <ThreeBackground />
      <Navbar currentPath={currentPath} />
      <main className="relative z-10">
        {isSocialMediaPage ? (
          <SocialMediaMarketing />
        ) : (
          <>
            <Hero />
            <div className="bg-transparent">
              <StartSection />
              <FeaturesChess />
              <FeaturesGrid />
              <StatsSection />
              <Pricing />
              <Contact />
              <CtaFooter />
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
