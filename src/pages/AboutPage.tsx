import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import artistPortrait from "@/assets/artist-portrait.jpg";

const AboutPage = () => (
  <PageWrapper>
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-display text-center text-gradient-gold mb-16">
          About
        </h1>

        <div className="flex flex-col md:flex-row gap-12 items-start">
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src={artistPortrait}
            alt="LogicalsoulRF portrait"
            className="w-full md:w-80 rounded-lg glow-gold object-cover"
          />
          <div className="flex-1">
            <h2 className="font-display text-2xl text-primary mb-6">His Story</h2>
            <div className="space-y-5 text-foreground/85 font-body leading-relaxed">
              <p>
                LogicalsoulRF is an independent artist dedicated to creating authentic and powerful music. Inspired by life, struggles, and ambition, his sound reflects a journey of growth, resilience, and passion.
              </p>
              <p>
                From the studio to the stage, LogicalsoulRF delivers energy and meaning in every performance. His mission is to connect with listeners on a deeper level and leave a lasting impact through sound.
              </p>
              <p>
                With a growing fanbase and consistent releases, he continues to build a name that stands for originality and purpose in the music industry.
              </p>
            </div>

            <div className="mt-10 p-6 rounded-lg bg-card border border-border">
              <h3 className="font-display text-lg text-primary mb-3">YouTube Channel</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                Welcome to the official YouTube channel of LogicalsoulRF. Here you'll find Bacardi sessions, DJ mixes, music releases, and exclusive content from one of the rising sounds in the scene.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default AboutPage;
