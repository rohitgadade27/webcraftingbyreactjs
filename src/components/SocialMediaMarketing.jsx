import React from "react";
import { Check, ArrowLeft, ArrowRight, TrendingUp, Sparkles, Video, Camera, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { CtaFooter } from "./CtaFooter";

export const SocialMediaMarketing = () => {
  const packages = [
    {
      name: "Basic Package",
      tagline: "Perfect for startups & local businesses",
      price: "₹11999",
      period: "/month",
      startingAt: true,
      features: [
        "9 Creative Posts/Month",
        "2 Reels/Month",
        "Caption Writing",
        "Hashtag Research",
        "Basic Page Management",
        "Monthly Insights Report",
        "Instagram / Facebook Management",
      ],
      highlight: false,
    },
    {
      name: "Standard Package",
      tagline: "Best for growing businesses",
      price: "₹15,999",
      period: "/month",
      startingAt: false,
      features: [
        "15 Creative Posts/Month",
        "3 Reels/Month",
        "Story Designs",
        "Engagement Support",
        "Content Strategy",
        "Trend & Hashtag Research",
        "Monthly Analytics Report",
        "Instagram + Facebook + LinkedIn",
      ],
      highlight: true,
    },
    {
      name: "Premium Package",
      tagline: "Complete brand management solution",
      price: "₹25,999",
      period: "/month",
      startingAt: false,
      features: [
        "18 Posts/Month",
        "5 Reels/Month",
        "Professional Video Editing",
        "Daily Story Updates",
        "Full Page Management",
        "Priority Support",
        "Instagram + Facebook + LinkedIn + YouTube + X (Twitter)",
      ],
      highlight: false,
    },
  ];

  const addons = [
    {
      name: "Paid Ads Management",
      icon: TrendingUp,
      desc: "Targeted campaigns on Meta and Google to drive high-intent traffic, leads, and sales.",
    },
    {
      name: "3D Product Animation",
      icon: Video,
      desc: "Photorealistic 3D product animations to showcase features, design, and premium details.",
    },
    {
      name: "Product Shoots",
      icon: Camera,
      desc: "High-resolution studio or lifestyle product photography tailored to your brand guidelines.",
    },
  ];

  const handlePackageSelect = (pkg) => {
    const text = `Hello Vexiqon! I'm interested in the Social Media *${pkg.name}* (${pkg.price}${pkg.period}). Please share details on how to get started.`;
    const whatsappUrl = `https://wa.me/917558397248?text=${encodeURIComponent(text)}`;
    window.location.href = whatsappUrl;
  };

  const handleAddonSelect = (addon) => {
    const text = `Hello Vexiqon! I'm interested in your Social Media Add-On service: *${addon.name}*. Please share details.`;
    const whatsappUrl = `https://wa.me/917558397248?text=${encodeURIComponent(text)}`;
    window.location.href = whatsappUrl;
  };

  const handleClosingClick = () => {
    const text = `Hello Vexiqon! I would like to inquire about your professional social media management services to grow our brand.`;
    const whatsappUrl = `https://wa.me/917558397248?text=${encodeURIComponent(text)}`;
    window.location.href = whatsappUrl;
  };

  return (
    <div className="w-full min-h-screen pt-24 bg-transparent relative">
      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        {/* Back Button */}
        <a
          href="#home"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 mb-8 px-4 py-2 rounded-full liquid-glass text-sm font-medium border border-white/5 hover:border-white/10"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </a>

        {/* Hero title */}
        <div className="flex flex-col items-start md:items-center text-left md:text-center max-w-4xl mx-auto mt-4">
          <div className="liquid-glass rounded-full px-4 py-1 text-xs font-semibold text-white font-body mb-6 flex items-center gap-2 border border-white/10 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-white/80 animate-pulse" />
            Social Media Handling
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-white tracking-tight leading-[0.9] mb-6">
            Grow Your Brand, <br />
            <span className="bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">
              Increase Engagement
            </span>
          </h1>
          <p className="text-white/60 font-body text-base md:text-lg max-w-2xl leading-relaxed font-light">
            Build a strong online presence with customized content strategy, trend-driven creative posts, reels, and analytics-driven brand optimization.
          </p>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto px-6 mb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`liquid-glass rounded-3xl p-8 flex flex-col h-full border ${
                pkg.highlight
                  ? "border-white/30 bg-white/5 shadow-[0_0_50px_0_rgba(255,255,255,0.05)] scale-100 lg:scale-[1.03]"
                  : "border-white/5"
              } relative overflow-hidden group hover:border-white/20 transition-all duration-300`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 right-0 bg-white text-black text-[10px] font-black px-5 py-1.5 rounded-bl-2xl uppercase tracking-widest">
                  Best Value
                </div>
              )}
              <h3 className="text-2xl font-heading text-white mb-2">{pkg.name}</h3>
              <p className="text-white/40 text-xs mb-6 uppercase tracking-wider font-medium">{pkg.tagline}</p>
              
              <div className="mb-8 flex items-baseline gap-1">
                {pkg.startingAt && <span className="text-white/40 text-sm font-light mr-1">Starts at</span>}
                <span className="text-4xl md:text-5xl font-heading text-white tracking-tight">{pkg.price}</span>
                <span className="text-white/40 text-sm font-light">{pkg.period}</span>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest border-b border-white/5 pb-2 mb-4">
                  What's Included
                </div>
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-[14px] text-white/70">
                    <Check className="w-4 h-4 text-white/50 shrink-0 mt-0.5" />
                    <span className="leading-tight font-light">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handlePackageSelect(pkg)}
                className={`w-full py-4 rounded-full text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                  pkg.highlight
                    ? "bg-white text-black hover:bg-white/90 shadow-lg hover:scale-[1.02]"
                    : "liquid-glass-strong text-white hover:bg-white/10 hover:scale-[1.02]"
                }`}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add-On Services Section */}
      <div className="bg-black/20 backdrop-blur-sm border-y border-white/5 py-24 px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-semibold text-white font-body mb-6 border border-white/5 uppercase tracking-wider">
              Add-On Services
            </div>
            <h2 className="text-3xl md:text-5xl font-heading text-white tracking-tight leading-[0.9] mb-4">
              Supercharge Your Digital Package
            </h2>
            <p className="text-white/40 font-body text-xs md:text-sm uppercase tracking-widest">
              Available as individual add-ons or customized bundles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {addons.map((addon, index) => {
              const Icon = addon.icon;
              return (
                <div
                  key={index}
                  className="liquid-glass rounded-2xl p-6 flex flex-col justify-between border border-white/5 hover:border-white/15 hover:scale-[1.02] transition-all duration-300 group"
                >
                  <div>
                    <div className="liquid-glass-strong rounded-2xl w-12 h-12 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                      <Icon className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300" />
                    </div>
                    <h4 className="text-lg font-heading text-white mb-2 leading-snug">
                      {addon.name}
                    </h4>
                    <p className="text-white/50 font-body font-light text-[12px] leading-relaxed mb-6">
                      {addon.desc}
                    </p>
                  </div>
                  <button
                    onClick={() => handleAddonSelect(addon)}
                    className="w-full py-2.5 rounded-xl text-xs font-semibold bg-white/5 text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-1.5"
                  >
                    Inquire
                    <ArrowRight className="w-3.5 h-3.5 opacity-65 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Professional Closing Callout */}
      <div className="max-w-4xl mx-auto px-6 mb-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="liquid-glass rounded-3xl p-10 md:p-14 text-center border border-white/10 relative overflow-hidden group shadow-[0_0_60px_-15px_rgba(255,255,255,0.05)]"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading text-white mb-8 leading-relaxed max-w-2xl mx-auto italic font-medium">
            “Professional social media management designed to grow your brand, increase engagement, and build a strong online presence.”
          </h3>
          <button
            onClick={handleClosingClick}
            className="bg-white text-black px-8 py-4 rounded-full text-base font-bold flex items-center justify-center gap-2 hover:bg-white/90 transition-all shadow-xl active:scale-95 mx-auto"
          >
            <MessageSquare className="w-5 h-5" />
            Talk to Our Strategy Team
          </button>
        </motion.div>
      </div>

      {/* Cta Footer component */}
      <CtaFooter />
    </div>
  );
};
