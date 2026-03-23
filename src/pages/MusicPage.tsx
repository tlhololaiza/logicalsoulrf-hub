import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/PageWrapper";
import spotifyImg from "@/assets/spotify.jpg";
import appleMusicImg from "@/assets/apple.jpg";
import youtubeImg from "@/assets/youtube music.jpg";

const platforms = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/7M22wQ6ZbKKoXWWBZJgBxx?si=UqL_TeaXQ1uQFLv4l8d7Sw",
    description: "Stream on Spotify",
    image: spotifyImg,
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/za/artist/logicalsoulrf/1739931850",
    description: "Listen on Apple Music",
    image: appleMusicImg,
  },
  {
    name: "YouTube Music",
    url: "https://youtube.com/@logicalsoulrf?si=UoQE_dkC_qjkXBe_",
    description: "Watch on YouTube",
    image: youtubeImg,
  },
];

const MusicPage = () => (
  <PageWrapper>
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-display text-center text-gradient-gold mb-4">
          Music
        </h1>
        <p className="text-center text-muted-foreground font-body mb-16">
          Stream LogicalsoulRF on your favourite platform
        </p>

        <div className="flex flex-col gap-5">
          {platforms.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer">
              <div className="group flex items-center gap-5 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:glow-gold">
                <img src={p.image} alt={p.name} className="w-12 h-12 rounded-full object-cover shrink-0" />
                <div className="flex-1">
                  <h3 className="font-display text-xl text-foreground">{p.name}</h3>
                  <p className="text-muted-foreground font-body text-sm">{p.description}</p>
                </div>
                <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </a>
          ))}
        </div>

        {/* Spotify Embed */}
        <div className="mt-16">
          <h2 className="text-2xl font-display text-foreground mb-6 text-center">Now Playing</h2>
          <div className="rounded-lg overflow-hidden">
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
          </div>
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default MusicPage;
