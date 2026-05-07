import { Check, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      tagline: "Perfect for small projects",
      price: "₹4999*",
      features: ["1-3 Pages", "Mobile Friendly", "Basic SEO", "Admin Panel"],
      highlight: false,
    },
    {
      name: "Business",
      tagline: "Most popular choice",
      price: "₹14999*",
      features: ["5-8 Pages", "Custom Design", "Admin Panel", "WhatsApp Integration", "Advanced SEO", "Analytics Setup"],
      highlight: true,
    },
    {
      name: "Premium",
      tagline: "Advanced applications",
      price: "₹34999*",
      features: ["React/Next.js App", "Custom Backend", "Authentication", "Payment Gateway", "Dashboard", "Database Design"],
      highlight: false,
    },
    {
      name: "E-Commerce",
      tagline: "Complete online store",
      price: "₹49999*",
      features: ["Product Listing", "Shopping Cart", "Order Tracking", "Admin Panel", "Payment Gateway", "3 Months Support"],
      highlight: false,
    },
    // {
    //   name: "3D Animation",
    //   tagline: "Cinematic 3D Experiences",
    //   price: "₹25999*",
    //   features: [
    //     "Interactive 3D Models (WebGL / Three.js)",
    //     "Smooth Animations & Transitions",
    //     "Scroll-based 3D Effects",
    //     "High-Quality Render Showcase",
    //     "Fullscreen Experience Mode",
    //     "Performance Optimized (Fast Loading)"
    //   ],
    //   highlight: false,
    // },
    // {
    //   name: "3D Portfolio",
    //   tagline: "Showcase your work",
    //   price: "₹19999*",
    //   features: [
    //     "Interactive 3D Project Showcase",
    //     "Case Study / Project Detail Pages",
    //     "Smooth Camera & Scene Transitions",
    //     "Custom UI with 3D Elements",
    //     "Contact Form / Hire Me Section",
    //     "Performance Optimized (Fast Loading)"
    //   ],
    //   highlight: false,
    // },
    // {
    //   name: "3D Landing Page",
    //   tagline: "High-converting 3D",
    //   price: "₹17999*",
    //   features: [
    //     "3D Hero Section (First Impression Focus)",
    //     "Scroll-based 3D Animations",
    //     "Call-To-Action Sections (Lead Generation)",
    //     "Product/Service Highlights with 3D",
    //     "Fully Responsive Design",
    //     "SEO & Speed Optimized"
    //   ],
    //   highlight: false,
    // },
  ];

  const addOns = [
    { name: "Domain & Hosting", price: "₹2000/year" },
    { name: "Payment Gateway Setup", price: "₹3000" },
    { name: "Monthly Maintenance", price: "₹2000" },
    { name: "Additional Pages", price: "₹1000/page" },
    { name: "Custom Features", price: "Custom Quote" },
    { name: "Mobile App", price: "Custom Quote" },
  ];

  const handlePlanSelect = (plan) => {
    const text = `Hello React.js.ai! I'm interested in the *${plan.name}* plan (${plan.price}). Please share more details on how to get started.`;
    const whatsappUrl = `https://wa.me/917558397248?text=${encodeURIComponent(text)}`;
    window.location.href = whatsappUrl;
  };

  return (
    <section id="pricing" className="pt-12 pb-24 bg-black px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight leading-[0.9] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-white/40 font-body text-sm uppercase tracking-widest">
            Choose the perfect plan for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`liquid-glass rounded-2xl p-6 flex flex-col h-full border ${plan.highlight ? "border-white/30 bg-white/5" : "border-white/5"
                } relative overflow-hidden group`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold px-4 py-1 rounded-bl-xl uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-heading text-white mb-1">{plan.name}</h3>
              <p className="text-white/40 text-[10px] mb-4 uppercase tracking-tighter">{plan.tagline}</p>
              <div className="mb-6">
                <span className="text-3xl font-heading text-white">{plan.price}</span>
                <span className="text-white/40 text-xs ml-1">Onwards</span>
              </div>
              <div className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-[13px] text-white/60">
                    <Check className="w-3.5 h-3.5 text-white/40" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => handlePlanSelect(plan)}
                className={`w-full py-3 rounded-full text-sm font-semibold transition-all flex items-center justify-center gap-2 ${plan.highlight
                  ? "bg-white text-black hover:bg-white/90"
                  : "liquid-glass-strong text-white hover:bg-white/10"
                  }`}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-3xl font-heading text-white mb-4">Popular Add-Ons</h3>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((addon, index) => (
              <div key={index} className="liquid-glass rounded-2xl p-4 flex justify-between items-center border border-white/5">
                <span className="text-white/70 text-sm font-medium">{addon.name}</span>
                <span className="text-white font-heading">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
