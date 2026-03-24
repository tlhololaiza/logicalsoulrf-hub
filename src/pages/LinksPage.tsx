import { ExternalLink, Music, Heart } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import { motion } from "framer-motion";
import spotifyImg from "@/assets/spotify.jpg";
import appleMusicImg from "@/assets/apple.jpg";
import youtubeImg from "@/assets/youtube.jpg";
import facebookImg from "@/assets/facebook.png";
import twitterImg from "@/assets/twitter.png";
import instagramImg from "@/assets/instagram.png";
import telegramImg from "@/assets/telegram.png";

const streamingLinks = [
  { image: spotifyImg, label: "Spotify", url: "https://open.spotify.com/artist/7M22wQ6ZbKKoXWWBZJgBxx?si=UqL_TeaXQ1uQFLv4l8d7Sw", subtitle: "Stream Music" },
  { image: appleMusicImg, label: "Apple Music", url: "https://music.apple.com/za/artist/logicalsoulrf/1739931850", subtitle: "Listen" },
  { image: youtubeImg, label: "YouTube", url: "https://youtube.com/@logicalsoulrf?si=UoQE_dkC_qjkXBe_", subtitle: "Watch Videos" },
];

const socialLinks = [
  { image: facebookImg, label: "Facebook", url: "https://www.facebook.com/RusHDaDeej" },
  { image: instagramImg, label: "Instagram", url: "https://www.instagram.com/logicalsoul012?igsh=MXJ1amp0bzlwbmsxcQ==" },
  { image: twitterImg, label: "X (Twitter)", url: "https://twitter.com/Oarabil10493200" },
  { image: telegramImg, label: "Telegram", url: "https://t.me/Logicalsoul" },
];

const LinksPage = () => (
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
          Connect With Me
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm sm:text-base md:text-lg text-muted-foreground font-body mb-2"
        >
          Sound. Emotion. Energy.
        </motion.p>
      </div>
    </section>

    {/* Streaming Platforms */}
    <section className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-display text-gradient-gold mb-8 sm:mb-10"
        >
          Stream Music
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {streamingLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-[0_0_30px_hsl(156_70%_36_/_0.2)] transition-all duration-300"
            >
              <div className="p-4 sm:p-6 flex flex-col items-center text-center">
                <img src={link.image} alt={link.label} className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg mb-4 object-cover" />
                <h3 className="font-display text-base sm:text-lg text-foreground mb-1">{link.label}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{link.subtitle}</p>
                <div className="mt-4 flex items-center gap-2 text-primary group-hover:translate-x-1 transition-transform">
                  <ExternalLink size={14} />
                  <span className="text-xs font-medium">Listen</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>

    {/* Support Section */}
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-primary/5">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-lg p-6 sm:p-8 md:p-10 text-center hover:border-primary/50 hover:shadow-[0_0_30px_hsl(156_70%_36_/_0.2)] transition-all"
        >
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <Heart size={32} className="text-primary" />
            </div>
          </div>
          <h3 className="font-display text-xl sm:text-2xl text-foreground mb-2">Support LogicalsoulRF</h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-6">Enjoy my music? Support my journey and get exclusive perks.</p>
          <motion.a
            href="https://streamlabs.com/sl_id_e1a21884-fd1f-3dfd-852f-55f586d1621a"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 sm:px-8 py-2 sm:py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm sm:text-base hover:bg-primary/90 transition-colors"
          >
            Send a Tip
          </motion.a>
        </motion.div>
      </div>
    </section>

    {/* Social Links */}
    <section className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-display text-gradient-gold mb-8 sm:mb-10"
        >
          Follow & Connect
        </motion.h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="flex flex-col items-center gap-2 p-4 sm:p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-[0_0_30px_hsl(156_70%_36_/_0.2)] transition-all group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <img src={link.image} alt={link.label} className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover" />
              </div>
              <span className="font-display text-xs sm:text-sm text-foreground text-center">{link.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default LinksPage;
