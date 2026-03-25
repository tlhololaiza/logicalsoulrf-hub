import { useState } from "react";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PageWrapper from "@/components/PageWrapper";
import { toast } from "sonner";
import { motion } from "framer-motion";

const services = [
  { label: "Live Performances", desc: "High-energy shows at venues & festivals" },
  { label: "Club Gigs", desc: "Energy-packed DJ sets for any event" },
  { label: "Collaborations", desc: "Feature on tracks & remix projects" },
  { label: "Studio Sessions", desc: "Production & recording sessions" },
];

const BookingsPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xgopeejp", {  //https://formspree.io/f/xgopeejp
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        toast.success("Success!", { description: "Your booking inquiry has been sent." });
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Error", { description: "Failed to send inquiry. Please try again." });
      }
    } catch {
      toast.error("Error", { description: "Failed to send inquiry. Please try again." });
    }
  };

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="py-1 sm:py-2 md:py-2 px-4 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-gradient-gold mb-4"
          >
            Book LogicalsoulRF
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base md:text-lg text-muted-foreground font-body"
          >
            Available for performances, events, collaborations, and studio sessions.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-display text-gradient-gold mb-8 sm:mb-10"
          >
            Services
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 sm:p-8 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-[0_0_30px_hsl(156_70%_36_/_0.2)] transition-all group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Calendar size={24} className="text-primary" />
                </div>
                <h3 className="font-display text-lg sm:text-xl text-foreground mb-2">{service.label}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Form Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-primary/5">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-2xl sm:text-3xl text-gradient-gold mb-8">Get In Touch</h2>
              <div className="space-y-5">
                <a href="tel:0817082326" className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all group">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-foreground mb-1">Phone</h3>
                    <p className="text-sm text-muted-foreground">081 708 2326</p>
                  </div>
                </a>
                
                <a href="mailto:oarabilestephens@gmail.com" className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all group">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-foreground mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">oarabilestephens@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-foreground mb-1">Location</h3>
                    <p className="text-sm text-muted-foreground">South Africa</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form 
              onSubmit={handleSubmit} 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              <h2 className="font-display text-2xl sm:text-3xl text-gradient-gold mb-8">Send Inquiry</h2>
              <div>
                <label className="block text-xs sm:text-sm font-body text-muted-foreground mb-2">Full Name</label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  maxLength={100}
                  className="bg-card border-border font-body text-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-body text-muted-foreground mb-2">Email Address</label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  maxLength={255}
                  className="bg-card border-border font-body text-sm"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-body text-muted-foreground mb-2">Message</label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  maxLength={1000}
                  rows={5}
                  className="bg-card border-border font-body text-sm resize-none"
                  placeholder="Tell us about your event or project…"
                />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display tracking-wider text-sm sm:text-base py-2.5">
                Send Inquiry
              </Button>
            </motion.form>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default BookingsPage;
