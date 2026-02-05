import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4">
      <div className="container max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <div className="p-2 rounded-lg bg-primary/10">
            <User className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold">Обо мне</h2>
        </div>

        <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>
            Привет! Меня зовут <span className="text-foreground font-medium">Даниил</span>, 
            мне 20 лет. Я <span className="text-primary font-medium">Junior Compositing Artist</span>, 
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
