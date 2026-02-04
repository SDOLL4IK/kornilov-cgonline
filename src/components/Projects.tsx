import { Film, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Алиса в стране чудес",
    year: "2025",
    role: "Compositing Artist",
    status: "released",
  },
  {
    title: "Инкассаторы",
    year: "2025",
    role: "Compositing Artist",
    status: "released",
  },
  {
    title: "Морозко",
    year: "2026",
    role: "Compositing Artist",
    status: "upcoming",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 rounded-lg bg-primary/10">
            <Film className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Проекты</h2>
        </div>

        <div className="grid gap-4">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="bg-card border-border hover:border-primary/30 transition-all duration-300 hover:glow-sm group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mt-1">{project.role}</p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                    <Badge
                      variant={project.status === "upcoming" ? "default" : "secondary"}
                      className={
                        project.status === "upcoming"
                          ? "bg-primary/20 text-primary border-primary/30"
                          : "bg-secondary text-muted-foreground"
                      }
                    >
                      {project.status === "upcoming" ? "Скоро" : "Вышел"}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8">
          + несколько проектов в работе
        </p>
      </div>
    </section>
  );
};

export default Projects;
