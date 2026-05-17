import { Zap, DollarSign, Cpu, Search } from "lucide-react";

export const FeaturesGrid = () => {
  const features = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality. Your business goes live faster.",
    },
    {
      icon: DollarSign,
      title: "Affordable Pricing",
      description: "Transparent pricing with no hidden charges. Great value for your investment.",
    },
    {
      icon: Cpu,
      title: "Modern Tech Stack",
      description: "React, Next.js, Node.js — we use the latest technologies for superior performance.",
    },
    {
      icon: Search,
      title: "SEO Friendly",
      description: "Built-in SEO optimization to ensure your website ranks high in search results.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 bg-black px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
            The difference
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight leading-[0.9]">
            Why Choose Us
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="liquid-glass rounded-2xl p-5 flex flex-col items-start text-left hover:scale-[1.02] transition-transform duration-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="liquid-glass-strong rounded-full w-9 h-9 flex items-center justify-center shrink-0">
                  <feature.icon className="w-4.5 h-4.5 text-white" />
                </div>
                <h4 className="text-lg font-heading text-white">
                  {feature.title}
                </h4>
              </div>
              <p className="text-white/60 font-body font-light text-[13px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
