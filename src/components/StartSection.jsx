import { HlsVideo } from "./HlsVideo.jsx";

export const StartSection = () => {
  return (
    <section id="process" className="relative flex items-center justify-center pt-32 pb-12 overflow-hidden">
      {/* Background Video */}
      <HlsVideo src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8" />

      {/* Fades */}
      <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
        <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-8">
          What we do
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight leading-[0.9] mb-6">
          Our Services
        </h2>
        <p className="text-white/60 font-body font-light text-sm md:text-base max-w-xl mb-10">
          Comprehensive web solutions to take your business to the next level.
        </p>
      </div>
    </section>
  );
};
