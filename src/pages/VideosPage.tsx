import PageWrapper from "@/components/PageWrapper";

const videos = [
  { id: "dQw4w9WgXcQ", title: "LogicalsoulRF - Bacardi Session" },
  { id: "dQw4w9WgXcQ", title: "LogicalsoulRF - DJ Mix" },
];

const VideosPage = () => (
  <PageWrapper>
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-display text-center text-gradient-gold mb-4">
          Videos
        </h1>
        <p className="text-center text-muted-foreground font-body mb-16">
          Bacardi sessions, DJ mixes & exclusive content
        </p>

        {/* YouTube Channel embed */}
        <div className="mb-12">
          <div className="aspect-video rounded-lg overflow-hidden glow-gold">
            <iframe
              src="https://www.youtube.com/embed?listType=user_uploads&list=logicalsoulrf"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="LogicalsoulRF YouTube"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://www.youtube.com/@logicalsoulrf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-display tracking-wider hover:bg-primary/90 transition-colors"
          >
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default VideosPage;
