import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PageWrapper from "@/components/PageWrapper";
import { useToast } from "@/hooks/use-toast";

const BookingsPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mwvrgvzz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        toast({ title: "Success!", description: "Your booking inquiry has been sent." });
        setForm({ name: "", email: "", message: "" });
      } else {
        toast({ title: "Error", description: "Failed to send inquiry. Please try again." });
      }
    } catch {
      toast({ title: "Error", description: "Failed to send inquiry. Please try again." });
    }
  };

  return (
    <PageWrapper>
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-center text-gradient-gold mb-3 sm:mb-4">
            Book LogicalsoulRF
          </h1>
          <p className="text-center text-sm sm:text-base md:text-lg text-muted-foreground font-body mb-10 sm:mb-12 md:mb-16">
            Available for performances, events, collaborations, and studio sessions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="font-display text-xl sm:text-2xl text-primary">Contact Details</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm sm:text-base text-foreground/85">
                  <MapPin size={18} className="text-primary shrink-0" />
                  <span className="font-body">South Africa</span>
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base text-foreground/85">
                  <Phone size={18} className="text-primary shrink-0" />
                  <a href="tel:0817082326" className="font-body hover:text-primary transition-colors">081 708 2326</a>
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base text-foreground/85">
                  <Mail size={18} className="text-primary shrink-0" />
                  <a href="mailto:oarabilestephens@gmail.com" className="font-body hover:text-primary transition-colors">oarabilestephens@gmail.com</a>
                </div>
              </div>

              <div className="mt-8 md:mt-0">
                <h3 className="font-display text-base sm:text-lg text-foreground mb-3">Services</h3>
                <ul className="space-y-2 text-sm sm:text-base text-muted-foreground font-body">
                  <li>• Live performances</li>
                  <li>• Club gigs</li>
                  <li>• Collaborations</li>
                  <li>• Studio sessions</li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs sm:text-sm font-body text-muted-foreground mb-1.5">Name</label>
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
                <label className="block text-xs sm:text-sm font-body text-muted-foreground mb-1.5">Email</label>
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
                <label className="block text-xs sm:text-sm font-body text-muted-foreground mb-1.5">Message</label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  maxLength={1000}
                  rows={5}
                  className="bg-card border-border font-body text-sm"
                  placeholder="Tell us about your event…"
                />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-display tracking-wider text-sm sm:text-base">
                Send Inquiry
              </Button>
            </form>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default BookingsPage;
