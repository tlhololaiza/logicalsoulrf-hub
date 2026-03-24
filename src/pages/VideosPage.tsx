import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import { ExternalLink, Youtube } from "lucide-react";

const videos = [
  { id: "Uv7EdTt5Hik", title: "Latest Release" },
  { id: "XylxQ9Xli4M", title: "DJ Mix" },
];

const VideosPage = () => (
  <PageWrapper>
    {/* Hero Section */}
    <section className="py-8 sm:py-10 md:py-12 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-gradient-gold mb-4"
        >
          Videos
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm sm:text-base md:text-lg text-muted-foreground font-body"
        >
          Bacardi sessions, DJ mixes & exclusive content
        </motion.p>
      </div>
    </section>

    {/* Featured Video */}
    <section className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-display text-gradient-gold mb-8 sm:mb-10"
        >
          Featured Video
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="aspect-video rounded-lg overflow-hidden border border-border hover:border-primary/50 hover:shadow-[0_0_30px_hsl(156_70%_36_/_0.2)] transition-all"
        >
          <iframe
            src="https://www.youtube.com/embed/T-Y_piKWTH4?rel=0"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="LogicalsoulRF YouTube"
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </section>

    {/* More Videos */}
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-primary/5">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-display text-gradient-gold mb-8 sm:mb-10"
        >
          More Content
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="aspect-video rounded-lg overflow-hidden border border-border hover:border-primary/50 hover:shadow-[0_0_30px_hsl(156_70%_36_/_0.2)] transition-all group"
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.title}
                className="w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* YouTube Channel CTA */}
    <section className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card border border-border rounded-lg p-8 sm:p-10 md:p-12 text-center hover:border-primary/50 hover:shadow-[0_0_30px_hsl(156_70%_36_/_0.2)] transition-all"
        >
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <Youtube size={32} className="text-primary" />
            </div>
          </div>
          <h3 className="font-display text-2xl sm:text-3xl text-foreground mb-3">Subscribe for More</h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-lg mx-auto">Don't miss new releases, behind-the-scenes content, and exclusive videos. Subscribe to the official channel.</p>
          <motion.a
            href="https://www.youtube.com/@logicalsoulrf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm sm:text-base hover:bg-primary/90 transition-colors"
          >
            Watch on YouTube
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  </PageWrapper>
);

export default VideosPage;
