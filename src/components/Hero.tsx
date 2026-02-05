import { ChevronDown } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 md:py-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container max-w-5xl mx-auto z-10">
        {/* Title */}
        <div className="text-center mb-6 md:mb-8 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4 tracking-tight">
            <span className="text-foreground">Даниил</span>{" "}
            <span className="text-gradient">Корнилов</span>
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground font-light">
            Compositing Artist
          </p>
        </div>

        {/* Showreel */}
        <div className="w-full max-w-4xl mx-auto glow rounded-xl overflow-hidden animate-scale-in">
          <AspectRatio ratio={16 / 9}>
            <iframe
              src="https://www.youtube.com/embed/5yvR50UUqD4?rel=0&modestbranding=1&color=white"
              title="Showreel - Даниил Корнилов"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </AspectRatio>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="mt-8 md:mt-12 mx-auto flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer group"
          aria-label="Scroll to about section"
        >
          <span className="text-sm font-medium">Узнать больше</span>
          <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
