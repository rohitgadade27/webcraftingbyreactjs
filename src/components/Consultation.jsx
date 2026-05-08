import { motion } from "motion/react";
import { Send, Sparkles, User, Phone, Mail } from "lucide-react";
import { BlurText } from "./BlurText";

export const Consultation = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");

    const text = `*New Free Consultation Request*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Email:* ${email}\n\n*Request Type:* Website Development Consultation`;
    const whatsappUrl = `https://wa.me/917558397248?text=${encodeURIComponent(text)}`;
    window.location.href = whatsappUrl;
  };

  return (
    <section id="consultation" className="py-20 md:py-32 bg-black px-6 relative z-10 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="liquid-glass rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 lg:p-24 border border-white/5 relative overflow-hidden group">
          {/* Animated Background Mesh */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8 md:space-y-12">
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 liquid-glass rounded-full px-4 py-2 text-xs font-medium text-white border border-white/10"
                >
                  <Sparkles className="w-3.5 h-3.5 text-white/70" />
                  <span className="tracking-wider uppercase">Free Website Development Consultation</span>
                </motion.div>
                
                <div className="space-y-2">
                  <BlurText 
                    text="Speak To Our"
                    className="text-5xl md:text-7xl lg:text-8xl font-heading text-white tracking-tighter leading-[0.85]"
                  />
                  <BlurText 
                    text="Expert Team"
                    className="text-5xl md:text-7xl lg:text-8xl font-heading text-white/30 italic tracking-tighter leading-[0.85]"
                    delay={0.4}
                  />
                </div>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-lg md:text-xl text-white/50 font-body font-light max-w-lg leading-relaxed"
                >
                  If you would like to speak to our team about your website or any development projects you may have, please complete the contact form below and we'll be in touch.
                </motion.p>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full liquid-glass flex items-center justify-center border border-white/10">
                  <Sparkles className="w-5 h-5 text-white/60" />
                </div>
                <div className="text-sm text-white/40 font-body">
                  <span className="text-white font-medium block">Consult with Specialists</span>
                  Average response time: 2 hours
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="liquid-glass rounded-[2rem] p-8 md:p-10 border border-white/10 relative overflow-hidden shadow-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-4 font-bold">Name</label>
                  <div className="relative group">
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-white/60 transition-colors" />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-full pl-14 pr-6 py-4 text-white font-body focus:outline-none focus:border-white/30 transition-all placeholder:text-white/10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-4 font-bold">Number</label>
                  <div className="relative group">
                    <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-white/60 transition-colors" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 00000 00000"
                      className="w-full bg-white/5 border border-white/10 rounded-full pl-14 pr-6 py-4 text-white font-body focus:outline-none focus:border-white/30 transition-all placeholder:text-white/10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 ml-4 font-bold">Email</label>
                  <div className="relative group">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-white/60 transition-colors" />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-full pl-14 pr-6 py-4 text-white font-body focus:outline-none focus:border-white/30 transition-all placeholder:text-white/10"
                    />
                  </div>
                </div>

                <button type="submit" className="w-full liquid-glass-strong rounded-full py-5 text-white font-bold flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all group/btn mt-4 shadow-lg shadow-white/5">
                  Get Free Consultation
                  <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </button>
                
                <p className="text-[10px] text-center text-white/20 mt-4 uppercase tracking-widest font-medium">
                  Direct connection to our tech leads
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
