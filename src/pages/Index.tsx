import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, Music, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/PageWrapper";
import heroBg from "@/assets/hero-bg.jpg";
import albumCover from "@/assets/album-cover-1.jpg";

const Index = () => (
  <PageWrapper>
    {/* Hero */}
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="LogicalsoulRF performing"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-display font-bold tracking-widest text-gradient-gold"
        >
          LogicalsoulRF
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 text-lg md:text-xl text-foreground/80 font-body tracking-[0.3em] uppercase"
        >
          Sound. Emotion. Energy.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://open.spotify.com/artist/7M22wQ6ZbKKoXWWBZJgBxx?si=UqL_TeaXQ1uQFLv4l8d7Sw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-display tracking-wider gap-2">
              <Play size={16} /> Spotify
            </Button>
          </a>
          <a
            href="https://music.apple.com/za/artist/logicalsoulrf/1739931850"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-display tracking-wider gap-2">
              <Music size={16} /> Apple Music
            </Button>
          </a>
          <a
            href="https://youtube.com/@logicalsoulrf?si=UoQE_dkC_qjkXBe_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 font-display tracking-wider gap-2">
              <ExternalLink size={16} /> YouTube
            </Button>
          </a>
        </motion.div>
      </div>
    </section>

    {/* Latest Release */}
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-display text-center text-gradient-gold mb-12">
          Latest Release
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src={albumCover}
            alt="Latest release cover art"
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg glow-gold"
          />
          <div className="text-center md:text-left">
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              LogicalsoulRF is a rising artist pushing a unique sound that blends emotion, rhythm, and real-life experiences. With a passion for music and a vision to inspire, every track tells a story and connects with the soul.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <Link to="/music">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-display tracking-wider">
                  Listen Now
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-border text-foreground hover:bg-secondary font-display tracking-wider">
                  Read More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default Index;
