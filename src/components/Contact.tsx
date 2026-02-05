import { Mail, Send, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const contacts = [
  {
    name: "IMDb",
    href: "https://www.imdb.com/name/nm18068801/",
    icon: ExternalLink,
    description: "Моя фильмография",
  },
  {
    name: "Email",
    href: "mailto:daniil.kornilov.06@gmail.com",
    icon: Mail,
    description: "daniil.kornilov.06@gmail.com",
  },
  {
    name: "Telegram",
    href: "https://t.me/sdoll4ik",
    icon: Send,
    description: "@sdoll4ik",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 bg-card/50">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Связаться со мной</h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Открыт для новых проектов и сотрудничества
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-4 md:p-6 rounded-xl bg-secondary border border-border hover:border-primary/50 transition-all duration-300 hover:glow-sm text-center h-full flex sm:flex-col items-center sm:items-center gap-4 sm:gap-0">
                <div className="w-10 h-10 md:w-12 md:h-12 sm:mx-auto sm:mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                  <contact.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="text-left sm:text-center">
                  <h3 className="font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-300 text-sm md:text-base">
                    {contact.name}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground break-all sm:break-normal">{contact.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-sm w-full sm:w-auto"
          >
            <a href="mailto:daniil.kornilov.06@gmail.com">
              <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Написать письмо
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
