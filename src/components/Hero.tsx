import { ChevronDown } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16 md:py-20">
      
      
      <div className="container max-w-5xl mx-auto z-10">
        {/* Showreel */}
        <div className="w-full max-w-4xl mx-auto glow rounded-xl overflow-hidden animate-scale-in">
          <AspectRatio ratio={16 / 9}>
            <iframe
              src="https://www.youtube.com/embed/5yvR50UUqD4?rel=0&modestbranding=1&color=white"
              title="Showreel - Kornilov Daniil"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </AspectRatio>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContact}
          className="mt-8 md:mt-12 mx-auto flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer group"
          aria-label="Scroll to contact section"
        >
          <span className="text-sm font-medium">Learn more</span>
          <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-primary" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
