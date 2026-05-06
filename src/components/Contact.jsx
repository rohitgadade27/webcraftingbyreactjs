import { Mail, Phone, MessageSquare, Send } from "lucide-react";

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const message = formData.get("message");

    const text = `*New Inquiry from React.js.ai*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n\n*Project Details:*\n${message}`;
    const whatsappUrl = `https://wa.me/917558397248?text=${encodeURIComponent(text)}`;
    window.location.href = whatsappUrl;
  };

  return (
    <section id="contact" className="py-32 bg-black px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body mb-6">
            Get in touch
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight leading-[0.9]">
            Let's Get Started
          </h2>
          <p className="mt-6 text-white/60 font-body font-light text-base max-w-xl">
            Ready to transform your business? Drop us a message and let's build something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Form */}
          <div className="liquid-glass rounded-3xl p-8 md:p-12 border border-white/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 ml-4">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Jane Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white font-body focus:outline-none focus:border-white/30 transition-all"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 ml-4">Your Phone number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(123) 456-7890"
                    className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white font-body focus:outline-none focus:border-white/30 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 ml-4">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white font-body focus:outline-none focus:border-white/30 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 ml-4">Tell us about your project</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="What are you looking to build?"
                  className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-6 py-4 text-white font-body focus:outline-none focus:border-white/30 transition-all resize-none"
                />
              </div>
              <button type="submit" className="w-full liquid-glass-strong rounded-full py-4 text-white font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all">
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-heading text-white mb-8">Need Guidance?</h3>
            <p className="text-white/50 font-body font-light text-base mb-12 max-w-md">
              Have questions about our services? Our team is here to help you find the perfect solution for your business needs.
            </p>

            <div className="space-y-8">
              <a href="mailto:reactjsaiwebcrafting@gmail.com" className="flex items-center gap-6 group">
                <div className="liquid-glass-strong w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-1">Email Us</div>
                  <div className="text-white font-body font-medium">reactjsaiwebcrafting@gmail.com</div>
                </div>
              </a>

              <a href="tel:+917558397248" className="flex items-center gap-6 group">
                <div className="liquid-glass-strong w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-1">Call Us</div>
                  <div className="text-white font-body font-medium">+91 75583 97248</div>
                </div>
              </a>

              <a href="https://wa.me/917558397248" className="flex items-center gap-6 group">
                <div className="liquid-glass-strong w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-1">WhatsApp</div>
                  <div className="text-white font-body font-medium">+91 75583 97248</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
