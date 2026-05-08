import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { StartSection } from "./components/StartSection";
import { FeaturesChess } from "./components/FeaturesChess";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { StatsSection } from "./components/StatsSection";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { Consultation } from "./components/Consultation";
import { CtaFooter } from "./components/CtaFooter";
import { ThreeBackground } from "./components/ThreeBackground";

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-body selection:bg-white selection:text-black relative overflow-x-hidden">
      <ThreeBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <div className="bg-transparent">
          <StartSection />
          <FeaturesChess />
          <FeaturesGrid />
          <StatsSection />
          <Pricing />
          <Consultation />
          <Contact />
          <CtaFooter />
        </div>
      </main>
    </div>
  );
}

export default App;
