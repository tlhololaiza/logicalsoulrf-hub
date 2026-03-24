import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import artistPortrait from "@/assets/artist-portrait 2.jpeg";
import { ExternalLink, Music, Zap } from "lucide-react";

const AboutPage = () => (
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
          About LogicalsoulRF
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm sm:text-base md:text-lg text-muted-foreground font-body"
        >
          Sound. Emotion. Energy.
        </motion.p>
      </div>
    </section>

    {/* Story Section */}
    <section className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src={artistPortrait}
            alt="LogicalsoulRF portrait"
            className="w-full md:w-72 aspect-square rounded-lg glow-gold object-cover"
          />
          <div className="flex-1">
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display text-3xl sm:text-4xl text-gradient-gold mb-6"
            >
              His Story
            </motion.h2>
            <div className="space-y-4 text-foreground/85 font-body leading-relaxed text-sm sm:text-base">
              <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                LogicalsoulRF is an independent artist dedicated to creating authentic and powerful music. Inspired by life, struggles, and ambition, his sound reflects a journey of growth, resilience, and passion.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                From the studio to the stage, LogicalsoulRF delivers energy and meaning in every performance. His mission is to connect with listeners on a deeper level and leave a lasting impact through sound.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                With a growing fanbase and consistent releases, he continues to build a name that stands for originality and purpose in the music industry.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* YouTube & Support Section */}
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
              <Music size={32} className="text-primary" />
            </div>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl text-foreground mb-3">YouTube Channel</h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-lg mx-auto">
            Welcome to the official YouTube channel of LogicalsoulRF. Find Bacardi sessions, DJ mixes, music releases, and exclusive content from one of the rising sounds in the scene.
          </p>
          <motion.a
            href="https://www.youtube.com/@logicalsoulrf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm sm:text-base hover:bg-primary/90 transition-colors"
          >
            Visit Channel
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  </PageWrapper>
);

export default AboutPage;
