import { Wrench } from "lucide-react";

const software = [
  { name: "Nuke", description: "Основной инструмент" },
  { name: "Mocha Pro", description: "Планарный трекинг" },
  { name: "3DEqualizer", description: "Matchmove" },
];

const specializations = [
  { name: "Compositing", icon: "🎬" },
  { name: "Cleanup", icon: "✨" },
  { name: "CGI Integration", icon: "🎯" },
  { name: "Roto", icon: "✂️" },
  { name: "Keying", icon: "🟢" },
  { name: "Matchmove", icon: "📐" },
  { name: "Color Correction", icon: "🎨" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 bg-card/50">
      <div className="container max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <div className="p-2 rounded-lg bg-primary/10">
            <Wrench className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold">Навыки и софт</h2>
        </div>

        {/* Software */}
        <div className="mb-10 md:mb-12">
          <h3 className="text-lg md:text-xl font-semibold mb-5 md:mb-8 text-muted-foreground">Программное обеспечение</h3>
          <div className="flex flex-wrap gap-3">
            {software.map((item) => (
              <div
                key={item.name}
                className="group px-3 md:px-4 py-2 md:py-3 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-default select-none"
              >
                <span className="text-sm md:text-base text-foreground font-medium group-hover:text-primary transition-colors">
                  {item.name}
                </span>
                <span className="hidden sm:inline text-sm text-muted-foreground ml-2">
                  — {item.description}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Specializations as cards */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-5 md:mb-8 text-muted-foreground">Специализации</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {specializations.map((spec, index) => (
              <div
                key={spec.name}
                className="p-3 md:p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 hover:bg-secondary transition-all duration-300 group cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-xl md:text-2xl mb-1 md:mb-2 block">{spec.icon}</span>
                <span className="text-xs md:text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {spec.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
