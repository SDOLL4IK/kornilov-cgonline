import { Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "Nuke", category: "primary" },
  { name: "Mocha Pro", category: "secondary" },
  { name: "3DEqualizer", category: "secondary" },
];

const specializations = [
  "Compositing",
  "Cleanup",
  "CGI Integration",
  "Roto",
  "Keying",
  "Matchmove",
  "Color Correction",
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

        {/* Software */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-muted-foreground">Программное обеспечение</h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className={`px-6 py-4 rounded-xl border transition-all duration-300 hover:scale-105 ${
                  skill.category === "primary"
                    ? "bg-primary/10 border-primary/30 glow-sm"
                    : "bg-secondary border-border hover:border-primary/30"
                }`}
              >
                <span
                  className={`text-lg font-medium ${
                    skill.category === "primary" ? "text-primary" : "text-foreground"
                  }`}
                >
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-muted-foreground">Специализации</h3>
          <div className="flex flex-wrap gap-3">
            {specializations.map((spec) => (
              <Badge
                key={spec}
                variant="secondary"
                className="px-4 py-2 text-sm font-medium bg-secondary hover:bg-primary/20 transition-colors duration-300"
              >
                {spec}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
