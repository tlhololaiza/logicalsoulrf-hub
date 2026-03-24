import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import albumCover from "@/assets/album-cover-1.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import artistPortrait from "@/assets/artist-portrait 2.jpeg";

const images = [
  { src: artistPortrait, alt: "LogicalsoulRF portrait" },
  { src: albumCover, alt: "Album cover art" },
  { src: heroBg, alt: "Live performance" },
  { src: gallery1, alt: "Sound visualization" },
  { src: gallery2, alt: "Concert crowd" },
  { src: gallery3, alt: "Studio session" },
];

const GalleryPage = () => (
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
          Gallery
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm sm:text-base md:text-lg text-muted-foreground font-body"
        >
          Cover art, visuals & behind the scenes
        </motion.p>
      </div>
    </section>

    {/* Gallery Section */}
    <section className="py-12 sm:py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="aspect-square overflow-hidden rounded-lg group border border-border hover:border-primary/50 hover:shadow-[0_0_30px_hsl(156_70%_36_/_0.2)] transition-all"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default GalleryPage;
