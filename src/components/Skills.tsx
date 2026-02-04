import { Wrench } from "lucide-react";

const software = [
  { name: "Nuke", description: "Основной инструмент", level: 85 },
  { name: "Mocha Pro", description: "Планарный трекинг", level: 70 },
  { name: "3DEqualizer", description: "Matchmove", level: 65 },
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
    <section id="skills" className="py-24 px-4 bg-card/50">
      <div className="container max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 rounded-lg bg-primary/10">
            <Wrench className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Навыки и софт</h2>
        </div>

        {/* Software with progress bars */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-muted-foreground">Программное обеспечение</h3>
          <div className="space-y-6">
            {software.map((item, index) => (
              <div
                key={item.name}
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </span>
                    <span className="text-sm text-muted-foreground ml-3">
                      {item.description}
                    </span>
                  </div>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specializations as cards */}
        <div>
          <h3 className="text-xl font-semibold mb-8 text-muted-foreground">Специализации</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {specializations.map((spec, index) => (
              <div
                key={spec.name}
                className="p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 hover:bg-secondary transition-all duration-300 group cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-2xl mb-2 block">{spec.icon}</span>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
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
