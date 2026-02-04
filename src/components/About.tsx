import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-primary/10">
            <User className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Обо мне</h2>
        </div>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Привет! Меня зовут <span className="text-foreground font-medium">Даниил</span>, 
            мне 20 лет. Я начинающий <span className="text-primary font-medium">Compositing Artist</span>, 
            работающий в формате фриланса.
          </p>
          
          <p>
            В основном специализируюсь на <span className="text-foreground">клинапе</span> и{" "}
            <span className="text-foreground">интеграции CGI</span> в отснятый материал. 
            Мой основной инструмент — <span className="text-primary">Nuke</span>, также активно 
            использую дополнительный софт для достижения наилучших результатов.
          </p>

          <p>
            Уже успел поработать над несколькими крупными кинопроектами и продолжаю развиваться 
            в индустрии визуальных эффектов.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
