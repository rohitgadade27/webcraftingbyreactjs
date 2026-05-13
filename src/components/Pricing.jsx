import { Check, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export const Pricing = () => {
  const plans = [
    {
      name: "Starter Package",
      tagline: "Perfect for startups & landing pages",
      price: "₹4999",
      features: [
        "Up to 3 Pages",
        "Responsive Design",
        "Mobile Friendly",
        "Landing Page UI",
        "Fast Loading Website"
      ],
      delivery: "5 Working Days",
      highlight: false,
    },
    {
      name: "Business Package",
      tagline: "Best for growing businesses",
      price: "₹18,999",
      features: [
        "Up to 7 Pages",
        "Custom UI/UX Design",
        "WhatsApp & Email Integration",
        "Inquiry Forms",
        "Dynamic Content Sections",
        "Social Media Integration"
      ],
      delivery: "10–14 Working Days",
      highlight: true,
    },
    {
      name: "Premium Web Application",
      tagline: "Advanced custom web solutions",
      price: "₹59,999",
      features: [
        "React / Next.js Frontend",
        "Custom Backend",
        "Authentication System",
        "Admin Dashboard",
        "Database Integration",
        "API Development",
        "Payment Gateway",
        "Responsive UI Design",
        "Performance Optimization"
      ],
      delivery: "3–5 Weeks",
      highlight: false,
    },
    {
      name: "E-Commerce Package",
      tagline: "Complete online store solution",
      price: "₹79,999",
      features: [
        "Custom E-Commerce Website",
        "Product Management",
        "Shopping Cart & Checkout",
        "Payment Gateway",
        "Order Tracking",
        "Admin Panel",
        "Customer Login System",
        "Mobile Optimized Store"
      ],
      delivery: "4–6 Weeks",
      highlight: false,
    },
  ];

  const additionalServices = [
    { name: "Domain & Hosting", price: "₹3000/year" },
    { name: "Payment Gateway Setup", price: "₹3000" },
    { name: "Website Maintenance", price: "₹2000/mo" },
    { name: "Additional Pages", price: "₹1000/page" },
    { name: "SEO Services", price: "Custom Quote" },
    { name: "Digital Marketing", price: "Custom Quote" },
    { name: "AI Chatbot Integration", price: "Custom Quote" },
    { name: "Custom Features", price: "Custom Quote" },
    { name: "Mobile App", price: "Custom Quote" },
  ];

  const handlePlanSelect = (plan) => {
    const text = `Hello Vexiqon! I'm interested in the *${plan.name}* plan (${plan.price}). Please share more details on how to get started.`;
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
                 <div className="pt-4 mt-4 border-t border-white/5">
                   <div className="flex items-center gap-3 text-[13px] text-white/80 font-medium">
                     <span className="text-white/40 uppercase text-[10px] tracking-widest">Delivery:</span>
                     <span>{plan.delivery}</span>
                   </div>
                 </div>
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
            <h3 className="text-3xl font-heading text-white mb-4">Additional Services</h3>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="liquid-glass rounded-2xl p-5 flex flex-col gap-2 border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <span className="text-white/70 text-sm font-medium">{service.name}</span>
                </div>
                <div className="pl-6">
                  <span className="text-white font-heading text-lg">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
