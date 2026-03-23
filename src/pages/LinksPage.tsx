import { ExternalLink, Music, Video, Facebook, Instagram, Twitter, Send, Heart } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import { motion } from "framer-motion";

const links = [
  { icon: Music, label: "Spotify", url: "https://open.spotify.com/artist/7M22wQ6ZbKKoXWWBZJgBxx?si=UqL_TeaXQ1uQFLv4l8d7Sw" },
  { icon: Music, label: "Apple Music", url: "https://music.apple.com/za/artist/logicalsoulrf/1739931850" },
  { icon: Video, label: "YouTube", url: "https://youtube.com/@logicalsoulrf?si=UoQE_dkC_qjkXBe_" },
  { icon: Heart, label: "Tip LogicalsoulRF", url: "https://streamlabs.com/sl_id_e1a21884-fd1f-3dfd-852f-55f586d1621a" },
  { icon: Facebook, label: "Facebook", url: "https://www.facebook.com/RusHDaDeej" },
  { icon: Instagram, label: "Instagram", url: "https://instagram.com/_oarabile.e" },
  { icon: Twitter, label: "Twitter (X)", url: "https://twitter.com/Oarabil10493200" },
  { icon: Send, label: "Telegram", url: "https://t.me/Logicalsoul" },
];

const LinksPage = () => (
  <PageWrapper>
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-md">
        <h1 className="text-5xl font-display text-center text-gradient-gold mb-2">
          LogicalsoulRF
        </h1>
        <p className="text-center text-muted-foreground font-body mb-12">
          Sound. Emotion. Energy.
        </p>

        <div className="flex flex-col gap-3">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 hover:glow-gold transition-all group"
            >
              <l.icon size={20} className="text-primary shrink-0" />
              <span className="flex-1 font-display tracking-wider text-foreground">{l.label}</span>
              <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default LinksPage;
