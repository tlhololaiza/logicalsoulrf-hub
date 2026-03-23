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
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-5xl md:text-6xl font-display text-center text-gradient-gold mb-4">
          Gallery
        </h1>
        <p className="text-center text-muted-foreground font-body mb-16">
          Cover art, visuals & behind the scenes
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="aspect-square overflow-hidden rounded-lg group"
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
