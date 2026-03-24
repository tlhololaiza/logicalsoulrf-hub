import { ExternalLink, Music } from "lucide-react";
import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import spotifyImg from "@/assets/spotify.jpg";
import appleMusicImg from "@/assets/apple.jpg";
import youtubeImg from "@/assets/youtube music.jpg";

const platforms = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/7M22wQ6ZbKKoXWWBZJgBxx?si=UqL_TeaXQ1uQFLv4l8d7Sw",
    description: "Stream & discover",
    image: spotifyImg,
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/za/artist/logicalsoulrf/1739931850",
    description: "Listen & save",
    image: appleMusicImg,
  },
  {
    name: "YouTube Music",
    url: "https://youtube.com/@logicalsoulrf?si=UoQE_dkC_qjkXBe_",
    description: "Watch & listen",
    image: youtubeImg,
  },
];

const MusicPage = () => (
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
          Music
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm sm:text-base md:text-lg text-muted-foreground font-body"
        >
          Stream LogicalsoulRF on your favourite platform
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
          Listen Now
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {platforms.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group"
            >
              <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-[0_0_30px_hsl(156_70%_36_/_0.2)] transition-all">
                <img src={p.image} alt={p.name} className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg mb-4 object-cover" />
                <h3 className="font-display text-lg sm:text-xl text-foreground mb-1">{p.name}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4">{p.description}</p>
                <div className="flex items-center gap-2 text-primary group-hover:translate-x-1 transition-transform">
                  <Music size={16} />
                  <span className="text-xs font-medium">Listen</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>

    {/* Spotify Embed Section */}
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-primary/5">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-display text-gradient-gold mb-8 sm:mb-10 text-center"
        >
          Now Playing
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-lg overflow-hidden"
        >
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/artist/7M22wQ6ZbKKoXWWBZJgBxx?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Player"
          />
        </motion.div>
      </div>
    </section>
  </PageWrapper>
);

export default MusicPage;
