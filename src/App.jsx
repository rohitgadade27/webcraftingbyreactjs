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

function App({ url }) {
  const [mounted, setMounted] = useState(false);
  const [currentPath, setCurrentPath] = useState(() => {
    if (url) return url;
    if (typeof window !== "undefined") return window.location.pathname;
    return "/";
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (currentPath === "/social-media") {
      window.scrollTo(0, 0);
    } else if (currentPath === "/") {
      const hash = window.location.hash;
      const targetId = hash.replace("#", "");
      if (targetId) {
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

  const isSocialMediaPage = currentPath === "/social-media";

  // Structured schemas
  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.vexiqon.in/#organization",
        "name": "VEXIQON",
        "url": "https://www.vexiqon.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.vexiqon.in/assets/logo%20-%202.PNG"
        },
        "sameAs": [
          "https://www.instagram.com/vexiqon"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.vexiqon.in/#localbusiness",
        "name": "VEXIQON",
        "image": "https://www.vexiqon.in/images/service_uiux_design.png",
        "url": "https://www.vexiqon.in",
        "telephone": "+917558397248",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.vexiqon.in/#website",
        "url": "https://www.vexiqon.in",
        "name": "VEXIQON",
        "description": "Web Design & Digital Marketing Agency India"
      }
    ]
  };

  const socialMediaSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.vexiqon.in/social-media/#service",
    "name": "Social Media Management & Marketing",
    "provider": {
      "@type": "LocalBusiness",
      "name": "VEXIQON",
      "url": "https://www.vexiqon.in"
    },
    "description": "Professional social media management designed to grow your brand, increase engagement, and build a strong online presence.",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "11999",
      "highPrice": "25999",
      "offerCount": "3"
    }
  };

  return (
    <div className="bg-black min-h-screen text-white font-body selection:bg-white selection:text-black relative overflow-x-hidden">
      {!isSocialMediaPage && (
        <>
          <title>Web Design & Digital Marketing Agency India | VEXIQON</title>
          <meta name="description" content="VEXIQON is a premier web design and digital marketing agency in India. We design and build modern, fast, SEO-optimized business websites." />
          <link rel="canonical" href="https://www.vexiqon.in/" />
          
          <meta property="og:title" content="Web Design & Digital Marketing Agency India | VEXIQON" />
          <meta property="og:description" content="VEXIQON is a premier web design and digital marketing agency in India. We design and build modern, fast, SEO-optimized business websites." />
          <meta property="og:image" content="https://www.vexiqon.in/images/service_uiux_design.webp" />
          <meta property="og:url" content="https://www.vexiqon.in/" />
          <meta property="og:type" content="website" />
          
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Web Design & Digital Marketing Agency India | VEXIQON" />
          <meta name="twitter:description" content="VEXIQON is a premier web design and digital marketing agency in India." />
          <meta name="twitter:image" content="https://www.vexiqon.in/images/service_uiux_design.webp" />
          
          <script type="application/ld+json">
            {JSON.stringify(homepageSchema)}
          </script>
        </>
      )}

      {isSocialMediaPage && (
        <>
          <title>Social Media Marketing & Management Services | VEXIQON</title>
          <meta name="description" content="Supercharge your online presence. Professional social media management, creative content, reels editing, and page growth services by VEXIQON." />
          <link rel="canonical" href="https://www.vexiqon.in/social-media" />
          
          <meta property="og:title" content="Social Media Marketing & Management Services | VEXIQON" />
          <meta property="og:description" content="Supercharge your online presence. Professional social media management, creative content, reels editing, and page growth services by VEXIQON." />
          <meta property="og:image" content="https://www.vexiqon.in/images/service_social_media.webp" />
          <meta property="og:url" content="https://www.vexiqon.in/social-media" />
          <meta property="og:type" content="website" />
          
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Social Media Marketing & Management Services | VEXIQON" />
          <meta name="twitter:description" content="Professional social media management & marketing by VEXIQON." />
          <meta name="twitter:image" content="https://www.vexiqon.in/images/service_social_media.webp" />

          <script type="application/ld+json">
            {JSON.stringify(socialMediaSchema)}
          </script>
        </>
      )}

      {mounted && <ThreeBackground />}
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
