import { HlsVideo } from "./HlsVideo.jsx";

export const CtaFooter = () => {
  return (
    <footer className="relative flex flex-col items-center justify-center pt-12 md:pt-32 pb-0 px-6 overflow-hidden">
      {/* Background Video */}
      <HlsVideo
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
        objectFit="object-contain md:object-cover"
      />

      {/* Fades */}
      <div className="absolute top-0 left-0 right-0 h-[120px] md:h-[200px] bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-[120px] md:h-[200px] bg-gradient-to-t from-black to-transparent pointer-events-none" />

      {/* Main CTA Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-6">
        <h2 className="text-3xl md:text-6xl lg:text-7xl font-heading text-white leading-[0.85] mb-6">
          Think. Code. Launch.
        </h2>
        <p className="text-white/70 font-body font-light text-base md:text-lg max-w-xl mb-12">
          Ready to build your digital future? Let's create a website that works as hard as you do.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="liquid-glass-strong rounded-full px-8 py-4 text-white font-medium hover:scale-105 transition-transform"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="relative z-10 mt-12 md:mt-32 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10 border-t border-white/10 pt-12 pb-10">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <span className="text-3xl font-heading text-white tracking-tight">VEXIQON</span>
            <span className="text-[10px] font-body tracking-[0.2em] text-white/40 uppercase">think.codelaunch</span>
          </div>
          <p className="text-white/40 text-sm font-body leading-relaxed max-w-xs">
            Modern websites powered by ReactJS and AI — designed to help brands grow, scale, and stand out in the digital world.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <h4 className="text-white font-heading text-lg">Quick Links</h4>
          <div className="flex flex-col gap-3">
            {["Services", "Pricing"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-white/40 text-sm hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-6">
          <h4 className="text-white font-heading text-lg">Get in Touch</h4>
          <div className="flex flex-col gap-3">
            <a href="mailto:vexiqonwebcrafting@gmail.com" className="text-white/40 text-sm hover:text-white transition-colors truncate">vexiqonwebcrafting@gmail.com</a>
            <a href="tel:+917558397248" className="text-white/40 text-sm hover:text-white transition-colors">+91 75583 97248</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 w-full max-w-7xl pb-4 flex justify-between items-center text-white/20 text-[10px] uppercase tracking-widest">
        <span>© 2026 VEXIQON. All rights reserved.</span>
        <span>Made with care by our team.</span>
      </div>
    </footer>
  );
};
