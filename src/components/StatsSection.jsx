import { HlsVideo } from "./HlsVideo.jsx";

export const StatsSection = () => {
  const stats = [
    { value: "100%", label: "Perfect Performance" },
    { value: "99%", label: "Client satisfaction" },
    { value: "3.5x", label: "More conversions" },
    { value: "5 days", label: "Average delivery" },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background Video */}
      <HlsVideo
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        style={{ filter: "saturate(0)" }}
      />

      {/* Fades */}
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {/* Content Card */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="liquid-glass rounded-3xl p-12 md:p-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <span className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-2">
                  {stat.value}
                </span>
                <span className="text-white/60 font-body font-light text-sm uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
